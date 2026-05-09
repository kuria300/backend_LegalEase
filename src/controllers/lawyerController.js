const {prismaClient} = require ('@prisma/client');
const prisma = new prismaClient();

exports.applyToBeLawyer = async (req, res) => {
    const {user_id,  file_url, lsk_number} = req.body;

    try{
        const existingApp = await prisma.lawyerApplication.findFirst({ 
            where:{
                OR:[{user_id: user_id},
                    {lsk_number:lsk_number}
                ]
            }
        });
        if (existingApp){
            return res.status(400).json({
                error: " An application with this User ID or LSK Number already exists"
            });
            //CREATE APPLICATION RECORD
            const application = await prisma.lawyerApplication.create({
                data:{
                    user_id,
                    file_url,
                    lsk_number,
                    status:"PENDING",
                    
        
                }
            });
            res.status(201).json({
                mesaage: "Application submitted successfully! Awaiting admin review.",
                applicationId: application.id

            });

        } 
        
        }
        catch (error){
            console.error("LE-202 Error:", error);
            res.status(500).json({error: "Internal server error."
            });
    }
};
