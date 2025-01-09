const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/privacy', (req, res) => {
    res.render('privacy');
});

app.get('/about', (req, res) => {
    res.render('about');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 