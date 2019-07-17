const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    const data = [
        { id: 1, firstName: 'John', lastName: "Doe" },
        { id: 2, firstName: 'Jane', lastName: "Smith" },
    ];
    res.json(data);
});

const port = 3001;

app.listen(port);