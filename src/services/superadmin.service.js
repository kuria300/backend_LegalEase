const {db}=require('../config/db')
const { generateTempPassword, hashPassword } = require("../utils/password.utils")
const { sendAdminCredentials } = require("../services/mailer.service")


const createAdminService = async (email) => {
  // 1. Look up user — include passwords (plural, matches schema relation name)
  const user = await db.users.findUnique({
    where: { email },
    include: { passwords: true },
  })

  if (!user) {
    return { statusCode: 404, body: { error: "No account found with that email address." } }
  }

  if (user.role === "ADMIN" || user.role === "SUPERADMIN") {
    return { statusCode: 409, body: { error: "This user is already an admin." } }
  }

  if (user.deleted_at) {
    return { statusCode: 410, body: { error: "This account has been deleted." } }
  }

  // 2. Generate + hash a temporary password
  const tempPassword = generateTempPassword()
  const hashedPassword = await hashPassword(tempPassword)

  // 3. Promote role + upsert password atomically
  await db.$transaction([
    db.users.update({
      where: { id: user.id },
      data: { role: "ADMIN" },
    }),
    user.passwords
      ? db.passwords.update({
          where: { user_id: user.id },
          data: { password: hashedPassword },
        })
      : db.passwords.create({
          data: {
            user_id: user.id,
            password: hashedPassword,
          },
        }),
  ])

  // 4. Email credentials — non-fatal if mail fails
  try {
    await sendAdminCredentials(email, tempPassword)
  } catch (mailErr) {
    console.error("[createAdminService] Mail delivery failed:", mailErr.message)
    return {
      statusCode: 201,
      body: {
        message:
          "Admin created successfully, but the credentials email could not be delivered. Share the password below manually.",
        emailSent: false,
        tempPassword,
      },
    }
  }

  return {
    statusCode: 201,
    body: {
      message: "Admin created successfully. Credentials have been sent to their email.",
      emailSent: true,
    },
  }
}

const rejectApplicationService = async (appId) => {
  const application = await db.lawyer_applications.findUnique({
    where: { id: appId },
    include: {
      lawyer_profiles: true,
      users: true,
    },
  })

  if (!application) {
    return { statusCode: 404, body: { error: "Application not found." } }
  }

  if (application.lawyer_profiles?.is_active) {
    return {
      statusCode: 409,
      body: { error: "Cannot reject an already verified lawyer. Suspend them instead." },
    }
  }

  // Hard delete the user — cascades to lawyer_applications and related records
  await db.users.delete({
    where: { id: application.user_id },
  })

  return {
    statusCode: 200,
    body: { message: "Application rejected and associated records deleted." },
  }
}


module.exports = { createAdminService, rejectApplicationService  }