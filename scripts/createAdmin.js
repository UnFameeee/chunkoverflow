require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const prisma = new PrismaClient();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createAdmin() {
    try {
        console.log('\n=== Create Admin Account ===\n');

        // Get username
        const username = await question('Enter admin username (default: admin): ');
        const finalUsername = username || 'admin';

        // Get password
        const password = await question('Enter admin password (default: admin): ');
        const finalPassword = password || 'admin';

        // Hash password
        const hashedPassword = await bcrypt.hash(finalPassword, 10);

        // Create or update admin user
        const user = await prisma.user.upsert({
            where: { username: finalUsername },
            update: {
                password: hashedPassword,
                updatedAt: new Date()
            },
            create: {
                username: finalUsername,
                password: hashedPassword
            }
        });

        console.log('\n✅ Admin account created successfully!');
        console.log(`Username: ${user.username}`);
        console.log('Password: [HIDDEN]');
        console.log('\nYou can now login to the admin panel.');

    } catch (error) {
        console.error('\n❌ Error creating admin account:', error.message);
    } finally {
        await prisma.$disconnect();
        rl.close();
    }
}

createAdmin();

// Handle script termination
process.on('SIGINT', async () => {
    console.log('\n\nScript terminated by user');
    await prisma.$disconnect();
    process.exit(0);
}); 