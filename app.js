const express = require('express');
const path = require('path'); // Required for serving static files
const app = express();
app.use(express.json());
app.use(express.static('public')); // Serve static files from the "public" directory

// GET method
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const sum = num1 + num2;
    res.send(`Sum is ${sum}`);
});

// POST method
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.send(`Sum is ${sum}`);
});

// Serve HTML file on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
