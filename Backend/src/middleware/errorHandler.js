const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Handle multer errors
    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).render('error', {
            message: 'File too large. Maximum size is 5MB'
        });
    }

    if (err.message === 'Only image files are allowed!') {
        return res.status(400).render('error', {
            message: err.message
        });
    }

    // Handle other errors
    res.status(500).render('error', {
        message: process.env.NODE_ENV === 'development' 
            ? err.message 
            : 'Error managing projects'
    });
};

module.exports = errorHandler; 