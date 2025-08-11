const { verifyAccessToken, verifyRefreshToken } = require('../lib/jwt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const isAuthenticated = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.cookies.accessToken;
        if (!authHeader) {
            return res.redirect('/admin/login');
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyAccessToken(token);
        
        if (!decoded) {
            return res.redirect('/admin/login');
        }

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId }
        });

        if (!user) {
            return res.redirect('/admin/login');
        }

        req.user = user;
        next();
    } catch (error) {
        res.redirect('/admin/login');
    }
};

const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(401).json({ message: 'No refresh token' });
        }

        const decoded = verifyRefreshToken(refreshToken);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId }
        });

        if (!user || user.refreshToken !== refreshToken) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }

        const tokens = generateTokens(user);
        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: tokens.refreshToken }
        });

        res.json(tokens);
    } catch (error) {
        res.status(401).json({ message: 'Token refresh failed' });
    }
};

module.exports = {
    isAuthenticated,
    refreshToken
}; 