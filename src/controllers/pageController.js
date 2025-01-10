const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const pageController = {
    about: (req, res) => {
        res.render('about', {
            title: 'About Us'
        });
    },

    privacy: (req, res) => {
        res.render('privacy', {
            title: 'Privacy Policy'
        });
    }
};

module.exports = pageController; 