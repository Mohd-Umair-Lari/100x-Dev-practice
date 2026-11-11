const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "umairlari";

const app = express();
app.use(express.json());

const users = [];

function auth(req, res, next) {
    try {
        const token = req.headers.authorization;
        const decodeddata = jwt.verify(token, JWT_SECRET);
        if (decodeddata.username) {
            req.username = decodeddata.username;
            next();
        } else {
            res.status(401).json({
                message: "You are not logged in"
            });
        }
    } catch (e) {
        res.status(401).json({
            message: "You are not logged in"
        });
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    users.push({ username, password });
    res.status(201).json({
        message: "user created"
    });
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find(usr => usr.username === username && usr.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({
        username: user.username
    }, JWT_SECRET);
    res.status(200).json({ token });
});

app.get('/me', auth, (req, res) => {
    const founduser = users.find(usr => usr.username === req.username);
    if (!founduser) {
        return res.status(401).json({ message: 'User not found' });
    }
    res.status(200).json({
        message: 'User found',
        username: founduser.username,
        password: founduser.password
    });
});

app.listen(3000);
