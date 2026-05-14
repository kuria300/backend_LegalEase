const { db } = require('../config/db');
const ErrorResponse = require('../utils/ErrorObj');
const { stkPush } = require('../api/mpesaStkPush');
const { processStkCallback } = require('../services/processCallBack')
const {findBookingWithLawyerProfile }=require('../repositories/booking.repository')
const { findPaymentSuccessPending, createPayment, markPaymentFailed, attachCheckoutRequestId }=require('../repositories/payment.repository')

const paymentBook = async (req, res, next) => {
    try {
        const { booking_id } = req.params;
        const { phoneNumber } = req.body;
        const token = req.mpesaToken;

        const booking = await findBookingWithLawyerProfile(booking_id)

        if (!booking) {
            throw new ErrorResponse('Booking Not Found', 404);
        }

        const existing = await findPaymentSuccessPending(booking_id)

           if(existing){
             if (existing.status === 'PENDING') {
              throw new ErrorResponse('You already have a pending payment', 400)
            }
            if(existing.status === 'SUCCESS'){
                throw new ErrorResponse('Already processed payment', 400)
            }
           }
           const amount = Number(booking.lawyer_profile.consultation_fee)
          try{
            const p1 = await createPayment({
            bookingId: booking_id,
            phoneNumber,
            amount
            })
        
        // initiate stkpush
        const stkResponse = await stkPush(token, phoneNumber, amount);

        console.log(stkResponse)

        // Check if stkResponse returned the expected bfr creating the payment
        if (!stkResponse.CheckoutRequestID) {

            await markPaymentFailed(p1.id)

            throw new ThrowError('Mpesa Stk Push payment failed to initiate', 500);
        }
        // update by adding checkreqid
        await attachCheckoutRequestId({
            paymentId: p1.id,
            checkoutReqId: stkResponse.CheckoutRequestID
        });

        //check if callback arrived fast before db operation nd got stored
        const pendingCallback =
            await db.pending_callbacks.findUnique({
                where: {
                    checkout_req_id: stkResponse.CheckoutRequestID
                }
            });

            if(pendingCallback){
                console.log('Processing early callback that returned before db operation of update');

                // manual callback route that we pass payload to and it will handle callbackwebhook point db operation
                await processStkCallback(pendingCallback.payload);
            }


        return res.status(200).json({
            success: true,
            message: "STK Push Sent",
            data: stkResponse.CheckoutRequestID,
            p1
        });
    }catch(error){
        return next(new ThrowError(error), 500)

    }

    } catch (error) {
        next(error);
    }
};

module.exports = { paymentBook };