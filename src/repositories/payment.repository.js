const { db }= require('../config/db')

// find unique by checkreqid from safaricom
const findUniqueByCheckoutReqId =async(CheckoutRequestID)=>{
   return db.payments.findUnique({
      where:{
        checkout_req_id: CheckoutRequestID
      }
   })
}

// update or create at same time 
const upsertPendingCallback = async(checkout_req_id, payload) => {
    return db.pending_callbacks.upsert({
        where:{
            checkout_req_id: checkout_req_id
        },

        data:{
            payload: payload
        },

        create:{
            checkout_req_id: checkout_req_id,
            payload: payload
        }
     })
}
 
// update if only pending
const markPaymentFailedIfPending = async(paymentId)=>{
    return db.payments.updateMany({
        where: {
            id: paymentId, 
            status: 'PENDING'
        },
        data:{
            status: 'FAILED'
        }
    })
}

// update succes only if pending
const markPaymentSuccessIfPending = async ({paymentId ,mpesaReceipt ,phoneNumber}) => {

    return db.payments.updateMany({
        where: {
            id: paymentId,
            status: 'PENDING'
        },

        data: {
            status: 'SUCCESS',
            mpesa_receipt: mpesaReceipt,
            number: String(phoneNumber)
        }
    });
};

const updatePaymnetSuccesIfPending = async (tx, { paymentId, mpesaReceipt, phoneNumber}) => {
    return tx.payments.updateMany({
        where: {
            id: paymentId,
            status: 'PENDING'
        },

        data: {
            status: 'SUCCESS',
            mpesa_receipt: mpesaReceipt,
            number: String(phoneNumber)
        }
    });
};

const updatePayment = async(tx, {paymentId, mpesaReceipt, phoneNumber}) =>{
    return tx.payments.update({
        where: {
            id: paymentId
        },
        data: {
            status: 'SUCCESS',
            mpesa_receipt: mpesaReceipt,
            number: String(phoneNumber)
        }
    })
}

const confirmBooking = async(tx, bookingId) => {
    return tx.bookings.update({
        where: {
            id: bookingId
        },

        data: {
            payment_status: 'PAID',
            booking_status: 'CONFIRMED'
        }
    });
};

const findPaymentSuccessPending = async(bookingId)=>{
   return db.payments.findFirst({
            where: {
                booking_id: booking_id,
            status: {
                in: ['PENDING', 'SUCCESS']
            }
         }
    });
}

const createPayment = async ({bookingId, phoneNumber,amount}) => {
    return db.payments.create({
        data: {
            booking_id: bookingId,
            number: String(phoneNumber),
            amount,
            status: 'PENDING'
        }
    });
};

const markPaymentFailed = async (paymentId) => {
    return db.payments.update({
        where: {
            id: paymentId
        },

        data: {
            status: 'FAILED'
        }
    });
};

const attachCheckoutRequestId = async ({paymentId, checkoutReqId}) => {
    return db.payments.update({
        where: {
            id: paymentId
        },

        data: {
            checkout_req_id: checkoutReqId
        }
    });
};

const deleteCallback =async(tx, checkoutReqId) =>{
    return tx.pending_callbacks.deleteMany({
        where: {
            checkout_req_id: checkout_reqID
            }
        });
}



module.exports={ findUniqueByCheckoutReqId, upsertPendingCallback , 
               markPaymentFailedIfPending, markPaymentSuccessIfPending, 
               updatePaymnetSuccesIfPending, confirmBooking, 
               findPaymentSuccessPending, createPayment, markPaymentFailed, 
               attachCheckoutRequestId, updatePayment, deleteCallback}