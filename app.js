const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// GET method to add two numbers from query parameters
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Both num1 and num2 must be valid numbers.');
    }

    const sum = num1 + num2;
    res.send(`Sum is ${sum}`);
});

// POST method to add two numbers from JSON body
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Both num1 and num2 must be valid numbers.');
    }

    const sum = num1 + num2;
    res.send(`Sum is ${sum}`);
});

// Serve HTML file on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use process.env.PORT for compatibility with cloud environments (e.g., Elastic Beanstalk)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
