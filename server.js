const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Your contact details API (this is fine)
const CONTACT = {
    phone: '9790297339',
    email: 'rahman51020@gmail.com'
};

// Serve static files (HTML, CSS, images, JS)
app.use(express.static(path.join(__dirname)));

// Serve your index.html file when someone visits your website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact API endpoint
app.get('/api/contact', (req, res) => {
    res.json(CONTACT);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
