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

    const booking = await findBookingWithLawyerProfile(booking_id);

    if (!booking) {
      throw new ErrorResponse("Booking Not Found", 404);
    }

      let formattedPhone = phoneNumber.trim();

      if (formattedPhone.startsWith('0')) {
          formattedPhone = '254' + formattedPhone.substring(1);
      } else if (formattedPhone.startsWith('+')) {
          formattedPhone = formattedPhone.substring(1);
      }
    
    //get amount from lawyer_profile
    const amount =booking?.users_bookings_lawyer_idTousers?.lawyer_applications?.lawyer_profiles?.consultation_fee;

    let payment;

    const existing = await findPaymentSuccessPending(booking_id);
    //handle existig payment
    if (existing) {
      if (existing.status === "SUCCESS") {
        throw new ErrorResponse("Already processed payment", 400);
      }
    if(existing.status === 'PENDING'){
      payment = await db.payments.update({
        where: { id: existing.id },
        data: {
          number: String(formattedPhone),
          amount,
        },
      });
    }
   }
    // if no existing or fauiled create new paymnet
    if (!existing || existing.status === "FAILED") {
      payment = await createPayment({
        bookingId: booking_id,
        phoneNumber: formattedPhone,
        amount,
      });
    }
    // initaiate payment
    const stkResponse = await stkPush({token:token, phoneNumber: formattedPhone, amount: amount});

    console.log(stkResponse)

    if (!stkResponse.CheckoutRequestID) {

      await markPaymentFailed(payment.id);

      throw new ErrorResponse("Mpesa STK Push payment failed to initiate",500);
    }
    // update checkout reqid
    await attachCheckoutRequestId({paymentId: payment.id, checkoutReqId: stkResponse.CheckoutRequestID,});

    // handle if callback comes early before update
    const pendingCallback = await db.pending_callbacks.findUnique({
      where: {
        checkout_req_id: stkResponse.CheckoutRequestID,
      },
    });

    if (pendingCallback) {
      console.log("Processing early callback");

      await processStkCallback(pendingCallback.payload);
    }

    return res.status(200).json({
      success: true,
      message: "STK Push Sent",
      data: stkResponse.CheckoutRequestID,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { paymentBook };