const { db } = require("../config/db")

const findAllApplications = async () => {
  return await db.lawyer_applications.findMany({
    include: {
      users: true,
      lawyer_profiles: true
    },
    orderBy: { created_at: 'desc' }
  })
}

const findApplicationById = async (id) => {
  return await db.lawyer_applications.findUnique({
    where: { id },
    include: {
      users: true,
      lawyer_profiles: true
    }
  })
}

const verifyLawyer = async (id, app) => {
  return await db.$transaction([
    db.lawyer_profiles.upsert({
      where: { lawyer_application_id: id },
      update: { is_active: true },
      create: {
        category: app.category || "General Practice",
        phone_number: app.phone_number || "",
        description: app.description || "Lawyer Profile",
        experience: app.experience || 0,
        consultation_fee: Number(app.consultation_fee) || 0,
        is_active: true,
        lawyer_application_id: app.id
      }
    }),
    db.users.update({
      where: { id: app.user_id },
      data: { role: 'LAWYER' }
    })
  ])
}

const suspendLawyer = async (id) => {
  return await db.lawyer_profiles.update({
    where: { lawyer_application_id: id },
    data: { is_active: false }
  })
}

const findAllUsers = async () => {
  return await db.users.findMany({
    include: {
      lawyer_applications: {
        include: { lawyer_profiles: true }
      }
    },
    orderBy: { created_at: 'desc' }
  })
}

const deactivateLawyer = async (id) => {
  return await db.$transaction([
    db.lawyer_profiles.updateMany({
      where: { lawyer_application_id: id },
      data: { is_active: false },
    }),
    db.lawyer_applications.delete({
      where: { id },
    }),
  ])
}

module.exports = {
  findAllApplications,
  findApplicationById,
  verifyLawyer,
  suspendLawyer,
  findAllUsers,
  deactivateLawyer
}
