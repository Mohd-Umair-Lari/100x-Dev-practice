const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.post('/post', function (req, res) {
    res.json({
        message: 'Hello World',
        body: req.body,
        authorization: req.headers.authorization
    });
});

app.listen(3000, function () {
    console.log('Dummy server running on http://localhost:3000');
});
