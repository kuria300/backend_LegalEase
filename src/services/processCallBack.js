const { db }= require('../config/db')
const {findUniqueByCheckoutReqId, upsertPendingCallback, markPaymentFailedIfPending, confirmBooking, updatePayment, deleteCallback}=require('../repositories/payment.repository')

// this will be called when callback arrives early than db update finishes
const processStkCallback = async(payload) => {
    const callbackStk = payload.Body.stkCallback;

    const resultCode = callbackStk.ResultCode;
    const resultDesc = callbackStk.ResultDesc;
    const checkout_reqID = callbackStk.CheckoutRequestID;

    //Input: {"Body":{"stkCallback":{"MerchantRequestID":"4ddd-4866-824e-3f944c695ba350353555","CheckoutRequestID":"ws_CO_04052026210410237768863372","ResultCode":0,"ResultDesc":"The service request is processed successfully.","CallbackMetadata":{"Item":[{"Name":"Amount","Value":1},{"Name":"MpesaReceiptNumber","Value":"UE4JS31RBV"},{"Name":"TransactionDate","Value":20260504210428},{"Name":"PhoneNumber","Value":254768863372}]}}}}ResultCode: 0, ResultDesc: The service request is processed successfully.

    // find payment first
    const payment = await findUniqueByCheckoutReqId(checkout_reqID)

    // if no payment callback arrived early and was saved
    if (!payment) {
        console.log('Payment missing. Saving pending callback.');

        await upsertPendingCallback(checkout_reqID, req.body)

        return;
    }

    // prevent duplicate callbacks updating same payment
    if (payment.status === 'SUCCESS') {
        console.log('Payment already processed');
        return;
    }

    // if result code is not 0 its failed
    if (resultCode != 0) {
        console.log('Payment failed:', resultDesc);

        await markPaymentFailedIfPending(payment.id)

        return;
    }

    // successful payment we handle here
    const metadata = callbackStk.CallbackMetadata.Item;

    const mpesaReceipt = metadata.find((item) => item.Name === 'MpesaReceiptNumber')?.Value;

    const phoneNumber = metadata.find((item) => item.Name === 'PhoneNumber')?.Value;

    await db.$transaction(async (tx) => {

        // we check if payment is pending if not return(stop)
        const currentPayment = await tx.payments.findUnique({
            where: {
                id: payment.id
            }
        });
        // handle duplicate
        if (currentPayment.status !== 'PENDING') {
            console.log('Duplicate callback ignored');
            return;
        }

        await updatePayment(tx, {
            paymentId: payment.id,
            mpesaReceipt,
            phoneNumber
            })

        await confirmBooking(tx, payment.booking_id)

        // delete callback after updating payment and bookings table
        await deleteCallback(tx, checkout_reqID)

        console.log('Payment processed successfully');
    });
};

module.exports = { processStkCallback };