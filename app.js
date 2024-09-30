const express = require('express');
const app = express();
app.use(express.json());
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
app.listen(3000, () => console.log('Server running on port 3000'));