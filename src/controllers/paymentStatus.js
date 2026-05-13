const { db} = require('../config/db')
const ErrorResponse = require('../utils/ErrorObj')
const { sleep }= require('../utils/sleep')
const { queryStkApi }= require('../api/mpesaQueryStk')
const { findUniqueByCheckoutReqId, updatePaymnetSuccesIfPending, confirmBooking} = require('../repositories/payment.repository')
const { v4: uuidv4 } = require("uuid");

const uuid = uuidv4();

const paymentStatus = async (req, res, next) => {
    try {
        const { checkout_req_id } = req.params;
        const token = req.mpesaToken;
        const maxAttempts = 3;

        // find payment
        const payment = await findUniqueByCheckoutReqId(checkout_req_id)

        if (!payment) {
            throw new ErrorResponse('Payment not found', 404);
        }

        //if webhook already updated db no need to query safaricom just return
        if (payment.status !== 'PENDING') {

            return res.status(200).json({
                success: true,
                message: 'Payment already processed',
                status: payment.status
            });
        }
//          {
//     "ResponseCode": "0",
//     "ResponseDescription": "The service request has been accepted successfully",
//     "MerchantRequestID": "29115-34620561-1",
//     "CheckoutRequestID": "ws_CO_191220191020363925",
//     "ResultCode": "0",
//     "ResultDesc": "The service request is processed successfully."

//      }

        // if not poll safaricom manuallyuseful when callback delays or never arrives
        for (let i = 1; i <= maxAttempts; i++) {
            try {
                const mpesaResult = await queryStkApi(token,checkout_req_id);

                console.log(mpesaResult);

                // successful payment
                if (mpesaResult.ResultCode == '0') {
                    //generate a manual receipt for polling the saf servers doen't return receipts
                    const mpesaReceipt = (parseInt(uuid.replace(/-/g, "").slice(0, 8), 16) % 8) + 1;

                    await db.$transaction(async (tx) => {
                        // re-check inside transaction
                        const currentPayment =
                            await tx.payments.findUnique({
                                where: {
                                    checkout_req_id
                                }
                            });

                        if (!currentPayment || currentPayment.status !== 'PENDING') {
                            console.log('alredy processed')
                            return;
                        }

                        const updated = await updatePaymnetSuccesIfPending(tx, {
                                paymentId: payment.id,
                                mpesaReceipt
                                })
                        //another process updated first
                        if (updated.count === 0) {
                            return;
                        }

                        await confirmBooking(tx, currentPayment.booking_id)

                        console.log('Manual payment confirmation success');
                    });

                    return res.status(200).json({
                        success: true,
                        status: 'SUCCESS',
                        message: 'Payment successful'
                    });
                }
                // if resultcode 1032 or 1 still processing
                if (mpesaResult.ResultCode == '1') {
                    if (i < maxAttempts) {
                        console.log('Still processing. Waiting...');
                        await sleep(15000);
                        continue;
                    }
                }
                const failed = await db.payments.updateMany({
                    where: {
                        checkout_req_id,
                        status: 'PENDING'
                    },

                    data: {
                        status: 'FAILED'
                    }
                });
                if(failed.count === 0){
                    return
                }

                throw new ErrorResponse(mpesaResult.ResultDesc || 'Payment failed',400);

            } catch (error) {
                //if attemps still remain try query
                if (i < maxAttempts) {
                    console.log('Retrying query...');
                    await sleep(15000);

                    continue;
                }

                throw error;
            }
        }

        throw new ErrorResponse('Timeout waiting for payment',408 );
    }catch(error){
       next(error)
    }
}


module.exports= { paymentStatus }