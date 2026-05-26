const crypto = require("crypto")
const { hashValue, compareValue } = require("./hash.utils")

const generateTempPassword = () => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const segment = () =>
    Array.from({ length: 4 }, () => chars[crypto.randomInt(chars.length)]).join("")
  return `${segment()}-${segment()}-${segment()}`
}

const hashPassword = async (plaintext) => hashValue(plaintext)

const verifyPassword = async (plaintext, hash) => compareValue(plaintext, hash)

module.exports = { generateTempPassword, hashPassword, verifyPassword }