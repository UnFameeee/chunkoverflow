const express = require('express');
const path = require('path');
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes will be imported here
const routes = require('./src/routes');
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    try {
        await prisma.$connect();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
});

// Handle cleanup on app termination
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});