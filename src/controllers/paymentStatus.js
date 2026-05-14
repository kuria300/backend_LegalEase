const { db} = require('../config/db')
const ErrorResponse = require('../utils/ErrorObj')
const { sleep }= require('../utils/sleep')
const { queryStkApi }= require('../api/mpesaQueryStk')
const { findUniqueByCheckoutReqId, updatePaymnetSuccesIfPending, confirmBooking} = require('../repositories/payment.repository')
const { v4: uuidv4 } = require("uuid");
const { sendEmailService }=require('../services/email.paymentservice')

const uuid = uuidv4();

const paymentStatus = async (req, res, next) => {
  try {
    const { checkout_req_id } = req.params;
    const token = req.mpesaToken;
    const maxAttempts = 2;

    // 1. Find payment
    const payment = await findUniqueByCheckoutReqId(checkout_req_id);

    if (!payment) {
      throw new ErrorResponse("Payment not found", 404);
    }

    // 2. If already processed handle
    if (payment.status !== "PENDING") {
      return res.status(200).json({
        success: true,
        message: "Payment already processed",
        status: payment.status,
      });
    }
    let mpesaResult;

    for (let i = 1; i <= maxAttempts; i++) {
      try {
        mpesaResult = await queryStkApi(token, checkout_req_id);
        break;
      } catch (err) {
        if (i < maxAttempts) {
          await sleep(3000);
          continue;
        }
        throw err;
      }
    }

    if (!mpesaResult) {
      throw new ErrorResponse("Failed to query M-Pesa", 500);
    }

    console.log(mpesaResult);
    
    // handle succes 
    if (mpesaResult.ResultCode == '0') {
    //generate a manual receipt for polling the saf servers doen't return receipts
    const mpesaReceipt = `LP${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const success =await db.$transaction(async (tx) => {
        // re-check inside transaction
        const currentPayment =await tx.payments.findUnique({
                where: {
                    checkout_req_id
                }
            });

        if (!currentPayment || currentPayment.status !== 'PENDING') {
            console.log('already processed')
            return false;
        }

        const updated = await updatePaymnetSuccesIfPending(tx, {
                paymentId: currentPayment.id,
                mpesaReceipt
                })
        //another process updated first
        if (updated.count === 0) {
            return false;
        }

        await confirmBooking(tx, currentPayment.booking_id)

        console.log('Manual payment confirmation success');

        return true
    });

    if(success){
        const booking = await db.bookings.findUnique({
                where:{
                    id: payment.booking_id
                },
                include:{
                    users_bookings_lawyer_idTousers: true,
                    users_bookings_user_idTousers: true
                }
                })
        
                const client = booking.users_bookings_user_idTousers
                const lawyer= booking.users_bookings_lawyer_idTousers
                
                // send email to lawyer
                await sendEmailService({
                email: lawyer.email,
                name: lawyer.first_name,
                amount: payment.amount,
                bookingId: booking.id,
                mpesaReceipt,
                role: lawyer.role
                })
        
                // send to client
                await sendEmailService({
                email: client.email,
                name: client.first_name,
                amount: payment.amount,
                bookingId: booking.id,
                mpesaReceipt,
                role: client.role
                })
                console.log('Email sent successfully')
            }

    return res.status(200).json({
        success: true,
        status: 'SUCCESS',
        message: 'Payment successful'
    });
}
    if (mpesaResult.ResultCode === "1") {
      return res.status(202).json({
        success: true,
        status: "PENDING",
        message: "Payment still processing",
      });
    }

   await db.payments.updateMany({
      where: {
        checkout_req_id,
        status: "PENDING",
      },
      data: {
        status: "FAILED",
      },
    });


    throw new ErrorResponse(mpesaResult.ResultDesc || "Payment failed",400);
  } catch (error) {
    next(error);
  }
};

module.exports = { paymentStatus };






 