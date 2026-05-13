<<<<<<< HEAD

//WE WILL ACTIVATE ONCE WE HAVE SUPERBASE CREDENTIALS
const {Pool} = require('pg')
const { PrismaPg } = require('@prisma/adapter-pg')
const { PrismaClient } = require('@prisma/client')
=======
const {Pool} = require('pg')
const { PrismaPg } = require('@prisma/adapter-pg')
const { PrismaClient } = require('../../prisma/src/generated/prisma')
>>>>>>> development
require('dotenv').config()


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 15,
    connectionTimeoutMillis: 3000
})

const adapter= new PrismaPg(pool)

const prisma= new PrismaClient({adapter})


module.exports={
    db: prisma
}