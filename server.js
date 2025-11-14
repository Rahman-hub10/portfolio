const express = require("express");
const path = require("path");
const app = express();

// Contact details
const CONTACT = {
    phone: "9790297339",
    email: "rahman51020@gmail.com"
};

// Serve static files
app.use(express.static(__dirname));

// Homepage route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Contact API
app.get("/api/contact", (req, res) => {
    res.json(CONTACT);
});

// Render PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
