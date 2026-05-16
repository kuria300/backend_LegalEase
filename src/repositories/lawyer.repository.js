const { db } = require("../config/db");

class LawyerRepository {
  // CHECK IF APPLICATION EXISTS
  static async findExistingApplication(user_id, lsk_number) {
    return await db.lawyer_applications.findFirst({
      where: {
        OR: [{ user_id }, { lsk_number }],
      },
    });
  }

  // CREATE APPLICATION
  static async createApplication(data) {
    return await db.lawyer_applications.create({
      data: {
        user_id: data.user_id,
        file_url: data.file_url,
        lsk_number: data.lsk_number,
        category: data.category,
        phone_number: data.phone_number || null,
        description: data.description,
        experience: data.experience,
        consultation_fee: data.consultation_fee,
      },
    });
  }

  // OPTIONAL: FIND BY ID
  static async findById(id) {
    return await db.lawyer_applications.findUnique({
      where: { id },
    });
  }
}

module.exports = LawyerRepository;