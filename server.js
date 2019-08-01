const express = require('express');
const app = express();
const data = require('./client/src/data/sample.json');

app.get('/api/data', (req, res) => {
    res.json(data);
});

const port = 3001;

app.listen(port);

// START SERVER & CLIENT: npm run startdev