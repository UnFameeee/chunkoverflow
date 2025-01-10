const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const { generateTokens } = require('../lib/jwt');
const prisma = new PrismaClient();

const login = async (req, res) => {
    try {
        console.log('Login attempt:', req.body); // Debug log
        const { username, password } = req.body;
        
        const user = await prisma.user.findUnique({
            where: { username }
        });

        console.log('Found user:', user); // Debug log

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ 
                message: 'Invalid credentials' 
            });
        }

        const tokens = generateTokens(user);
        
        await prisma.user.update({
            where: { id: user.id },
            data: { 
                refreshToken: tokens.refreshToken,
                lastLogin: new Date()
            }
        });

        res.cookie('accessToken', `Bearer ${tokens.accessToken}`, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        });

        res.json({
            success: true,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        });
    } catch (error) {
        console.error('Login error:', error); // Debug log
        res.status(500).json({ 
            success: false,
            message: 'Login failed' 
        });
    }
};

const logout = async (req, res) => {
    try {
        await prisma.user.update({
            where: { id: req.user.id },
            data: { refreshToken: null }
        });
        
        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Logout failed' });
    }
};

module.exports = {
    login,
    logout
}; 