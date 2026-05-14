const { db: prisma } = require("../config/db");

const createDocument = (data) =>
  prisma.documents.create({ data });

const findDocumentById = (id) =>
  prisma.documents.findUnique({ where: { id } });

const findDocuments = (where) =>
  prisma.documents.findMany({
    where,
    orderBy: { uploaded_at: "desc" },
  });

const deleteDocument = (id) =>
  prisma.documents.delete({ where: { id } });

module.exports = {
  createDocument,
  findDocumentById,
  findDocuments,
  deleteDocument,
};