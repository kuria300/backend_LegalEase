const { db: prisma } = require('../config/db.js');

class ChatRepository {
    // Save a chat message and AI reply to the database for a logged in user
    async saveMessage(userId, message, reply, category = 'general') {
        return await prisma.chatbots.create({
            data: {
                user_id: userId,
                chat: message,
                ai_response: reply,
                category: category
            }
        });
    }

    // Save a document file url to the database for a logged in user
    async saveDocument(userId, fileName) {
        return await prisma.documents.create({
            data: {
                user_id: userId,
                file_url: fileName,
            }
        });
    }

    // Fetch the most recent chat messages for a logged in user
    async getChatHistory(userId, limit = 50) {
        return await prisma.chatbots.findMany({
            where: { user_id: userId },
            orderBy: { id: 'desc' },
            take: parseInt(limit),
        });
    }

    // Fetch the most recent document uploads for a logged in user
    async getDocumentHistory(userId, limit = 20) {
        return await prisma.documents.findMany({
            where: { user_id: userId },
            orderBy: { uploaded_at: 'desc' },
            take: parseInt(limit),
            select: { id: true, file_url: true, uploaded_at: true },
        });
    }

    // Delete all chat messages for a logged in user
    async clearHistory(userId) {
        return await prisma.chatbots.deleteMany({ where: { user_id: userId } });
    }
}

module.exports = new ChatRepository();
