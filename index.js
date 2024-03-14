const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const todos = [];

app.get('/', (req, res) => {
    res.json({\n        message: 'Welcome to the TODO APP',\n    });
});

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { title, completed } = req.body;
    const todo = { id: todos.length + 1, title, completed };
    todos.push(todo);
    res.json(todo);
});

app.listen(port, () => console.log(`Express server listening on port ${port}`)\n);