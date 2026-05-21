const AdminRepository = require("../repositories/admin.repository")
const {sendApprovalEmail, sendRejectionEmail} = require("../utils/emails")
const minioClient = require("../config/minio")

const getApplications = async (req, res) => {
  try {
    const applications = await AdminRepository.findAllApplications()

    const formattedApps = applications.map(app => ({
      id: app.id,
      lsk_number: app.lsk_number,
      category: app.category,
      phone_number: app.phone_number,
      experience: app.experience,
      consultation_fee: app.consultation_fee,
      description: app.description,
      file_url: app.file_url,
      is_active: app.lawyer_profiles?.is_active || false,
      user_name: `${app.users?.first_name} ${app.users?.second_name}`,
      user_email: app.users?.email
    }))

    res.status(200).json(formattedApps)
  } catch (error) {
    console.error("Error fetching applications:", error)
    res.status(500).json({ error: "Failed to fetch applications" })
  }
}

const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params

    const app = await AdminRepository.findApplicationById(id)

    if (!app) return res.status(404).json({ error: "Application not found" })

    // generate a presigned URL valid for 1 hour so the browser can access it
    let viewable_file_url = null
    if (app.file_url) {

      const objectKey = app.file_url
        .split(`${process.env.MINIO_BUCKET_NAME}/`)[1]

      viewable_file_url = await minioClient.presignedGetObject(
        process.env.MINIO_BUCKET_NAME,
        objectKey,
        60 * 60 // 1 hour
      )
    }

    res.status(200).json({
      id: app.id,
      lsk_number: app.lsk_number,
      category: app.category,
      phone_number: app.phone_number,
      experience: app.experience,
      consultation_fee: app.consultation_fee,
      description: app.description,
      file_url: viewable_file_url,
      is_active: app.lawyer_profiles?.is_active || false,
      user_name: `${app.users?.first_name} ${app.users?.second_name}`,
      user_email: app.users?.email
    })
  } catch (error) {
    console.error("Error fetching application details:", error)
    res.status(500).json({ error: "Failed to fetch application details" })
  }
}

const approveApplication = async (req, res, next) => {
  try {
    const { id } = req.params

    const app = await AdminRepository.findApplicationById(id)
    if (!app) return res.status(404).json({ error: "Application not found" })

    await AdminRepository.verifyLawyer(id, app)

    sendApprovalEmail({
      to: app.user_email,
      name: app.user_name,
    }).catch((err) => console.error("Approval email failed:", err))

    res.status(200).json({ message: "Lawyer verified successfully" })
  } catch (error) {
    console.error("Error verifying lawyer:", error)
    res.status(500).json({ error: "Failed to verify lawyer" })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await AdminRepository.findAllUsers()

    const formattedUsers = users.map(user => ({
      id: user.id,
      name: `${user.first_name} ${user.second_name}`,
      email: user.email,
      role: user.role,
      is_active: user.role === 'LAWYER'
        ? user.lawyer_applications?.lawyer_profiles?.is_active || false
        : true
    }))

    res.status(200).json(formattedUsers)
  } catch (error) {
    console.error("Error fetching users:", error)
    res.status(500).json({ error: "Failed to fetch system users" })
  }
}

const revokeLawyer = async (req, res) => {
  try {
    const { id } = req.params

    await AdminRepository.suspendLawyer(id)

    res.status(200).json({ message: "Lawyer suspended successfully" })
  } catch (error) {
    console.error("Error suspending lawyer:", error)
    res.status(500).json({ error: "Failed to suspend lawyer" })
  }
}

module.exports = {
  getApplications,
  getApplicationById,
  approveApplication,
  getAllUsers,
  revokeLawyer
}