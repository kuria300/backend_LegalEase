const { db } = require("../config/db");

class LawyerRepository {
  // CHECK IF APPLICATION EXISTS
  static async findExistingApplication(user_id, lsk_number) {
    return await db.lawyerApplication.findFirst({
      where: {
        OR: [{ user_id }, { lsk_number }],
      },
    });
  }

  // CREATE APPLICATION
  static async createApplication(data) {
    return await db.lawyerApplication.create({
      data: {
        user_id: data.user_id,
        file_url: data.file_url,
        lsk_number: data.lsk_number,
        status: "PENDING",
      },
    });
  }

  // OPTIONAL: FIND BY ID
  static async findById(id) {
    return await db.lawyerApplication.findUnique({
      where: { id },
    });
  }
}

module.exports = LawyerRepository;