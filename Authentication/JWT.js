const express = require('express');
const jwt = require('jsonwebtoken');
JWT_SECRET="umairlari"

const app = express();
app.use(express.json());

const users = [];


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the authentication API' });
});

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    users.push({ username, password });
    res.status(201).json({ message: 'User created successfully' });
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find(user => user.username === username && user.password === password);  // find the user in the users array using the find function maps and filters
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({
        username : username
    },JWT_SECRET); // convert their username to a jwt basd on the JWT secret
    res.status(200).send({token});
});

// this is the End point which cheks and validates the jwt token for a specific user
app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const decodedinfo=jwt.verify(token,JWT_SECRET);    // {username:umairlari@gmail.com}
    const username=decodedinfo.username;

    let founduser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username===username){
            founduser=users[i];
        }
    }

    if (!founduser) {
        return res.status(401).json({ message: 'Token invalid' });
    }
    res.status(200).json({ message: 'User found', user: founduser, password: founduser.password });
});

app.listen(3000);
