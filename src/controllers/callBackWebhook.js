const {db}= require('../config/db')
const ErrorResponse = require('../utils/ErrorObj')
const { findUnique, upsertPendingCallback, markPaymentFailedIfPending, updatePaymnetSuccesIfPending, confirmBooking, findUniqueByCheckoutReqId }=require('../repositories/payment.repository')

const callbackEndPoint = async (req,res, next)=>{

  try{
     console.log(
        JSON.stringify(req.body, null, 2)
    )

    //Input: {"Body":{"stkCallback":{"MerchantRequestID":"4ddd-4866-824e-3f944c695ba350353555","CheckoutRequestID":"ws_CO_04052026210410237768863372","ResultCode":0,"ResultDesc":"The service request is processed successfully.","CallbackMetadata":{"Item":[{"Name":"Amount","Value":1},{"Name":"MpesaReceiptNumber","Value":"UE4JS31RBV"},{"Name":"TransactionDate","Value":20260504210428},{"Name":"PhoneNumber","Value":254768863372}]}}}}ResultCode: 0, ResultDesc: The service request is processed successfully.

    const callbackStk = req.body.Body.stkCallback

    const resultCode= callbackStk.ResultCode

    const resultDesc= callbackStk.ResultDesc

    const checkout_reqID= callbackStk.CheckoutRequestID

    // find payment
     const payment = await findUniqueByCheckoutReqId(checkout_reqID)

      // payment missing return to user
      if(!payment){
        console.log('Payment doesn"t exist')
        // create a record if callback has arrived before db updates check_req_id in checkout
        await upsertPendingCallback(checkout_reqID, req.body)

         return res.json({
            ResultCode: 0,
            ResultDesc: 'Received'
         })
      }

    //handle duplicate payments not to insert in thedb
      if(payment.status === 'SUCCESS'){
       console.log('Payment already processed4')

        return res.json({
            ResultCode: 0,
            ResultDesc: 'Already processed payment'
         })
    }

    // handle failed payment
    if(resultCode != 0){
      console.log(resultCode)
        const data= await markPaymentFailedIfPending(payment.id)

        if(data.count === 0){
          console.log('end the second callback from changing bookings db')
          return
        }

        return res.json({
          ResultCode: 0,
          ResultDesc: 'Received'
        })
    }

        /*
        body retuend by safarcicoom example
        {
      "Body": {
        "stkCallback": {
          "MerchantRequestID": "12345",
          "CheckoutRequestID": "ws_CO_12345",
          "ResultCode": 0,
          "ResultDesc": "Success",
          "CallbackMetadata": {
            "Item": [
              {
                "Name": "Amount",
                "Value": 3000
              },
              {
                "Name": "MpesaReceiptNumber",
                "Value": "QWE123"
              }
            ]
          }
        }
      }
    }
    */

    // successful payment
    const metadata= callbackStk.CallbackMetadata.Item

    const mpesaReceipt= metadata.find((item)=>item.Name === 'MpesaReceiptNumber')?.Value

    const phoneNumber = metadata.find((item)=>item.Name === 'PhoneNumber')?.Value

    await db.$transaction(async (tx) => {
    // Re-check status so we only update where status is pendig
    const currentPayment = await tx.payments.findUnique({ where: { id: payment.id } });
    if (currentPayment.status !== 'PENDING') return;

    const updated= await updatePaymnetSuccesIfPending(tx, {
      paymentId: payment.id,
      mpesaReceipt,
      phoneNumber
    })
    // allow only one payment if 2 callbacks come
    if(updated.count === 0){
      return
    }

     await confirmBooking(tx, payment.booking_id)
    });

      return res.json({
        ResultCode: 0,
        ResultDesc: 'Received'
      })

  }catch(error){
    console.error(error)
   
    return res.json({
        ResultCode: 0,
        ResultDesc: 'Received'
      })

  }  
}

module.exports= { callbackEndPoint}