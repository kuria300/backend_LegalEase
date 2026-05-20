require('dotenv').config();
const { Client } = require('pg');
const bcrypt = require('bcrypt');

async function seedAdmin() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('🌱 Connected cleanly to database instance...');

    // 1. Generate a valid unique UUID for the admin user entry
    const { rows } = await client.query('SELECT gen_random_uuid() AS uuid;');
    const adminId = rows[0].uuid;

    const email = 'admin@legalease.co.ke';
    const hashedPassword = await bcrypt.hash('AdminSecure2026!', 10);
    const dob = new Date('1990-01-01').toISOString();

    // 2. Insert into the plural, lowercase "users" table
    const userQuery = `
      INSERT INTO "users" (id, first_name, second_name, email, role, dob, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
      ON CONFLICT (email) 
      DO UPDATE SET first_name = EXCLUDED.first_name
      RETURNING id, email;
    `;
    const userValues = [adminId, 'System', 'Administrator', email, 'ADMIN', dob];
    const userResult = await client.query(userQuery, userValues);
    
    const finalUserId = userResult.rows[0].id;
    console.log(`User profile established for: ${userResult.rows[0].email}`);

    // 3. Connect/Update the corresponding record inside the "passwords" table
    const passwordQuery = `
      INSERT INTO "passwords" (id, password, user_id)
      VALUES (gen_random_uuid(), $1, $2)
      ON CONFLICT (user_id)
      DO UPDATE SET password = EXCLUDED.password;
    `;
    await client.query(passwordQuery, [hashedPassword, finalUserId]);

    console.log('\n============== STATUS ==============');
    console.log(`Admin completely seeded successfully!`);
    console.log(`Login Email: ${email}`);
    console.log('====================================');

  } catch (err) {
    console.error('❌ Seeding execution failure:', err.message);
  } finally {
    await client.end();
  }
}

seedAdmin();