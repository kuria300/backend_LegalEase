const { defineConfig } = require('@prisma/config');

module.exports = defineConfig({
  migrations: {
    seed: 'node ./prisma/seed.js', // 👈 Tells Prisma exactly where your admin seed file is
  },
});