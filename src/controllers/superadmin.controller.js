const { createAdminService } = require("../services/superadmin.service")


const createAdmin = async (req, res) => {
  const { email } = req.body

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "A valid email address is required." })
  }

  const result = await createAdminService(email.trim().toLowerCase())

  return res.status(result.statusCode).json(result.body)
}

module.exports = { createAdmin }