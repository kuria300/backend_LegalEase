
//WE WILL ACTIVATE ONCE WE HAVE SUPERBASE CREDENTIALS
const {Pool} = require('pg')
const { PrismaPg } = require('@prisma/adapter-pg')
const { PrismaClient } = require('../../prisma/src/generated/prisma')
require('dotenv').config()


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 20000,
})

const adapter= new PrismaPg(pool)

const prisma= new PrismaClient({adapter})


module.exports={
    db: prisma
}
