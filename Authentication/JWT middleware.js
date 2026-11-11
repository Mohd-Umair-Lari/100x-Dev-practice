const express=require('express');
const jwt = require('jsonwebtoken');
JWT_SECRET="umairlari";

const app=express();
app.use(express.json());

users=[];

function auth(req,res,next){
    const token = req.headers.token;
    const decodeddata = jwt.verify(token,JWT_SECRET);
    if(decodeddata.username){
        req.username=decodeddata;
        next();
    }
    else{
        res.json({
            message : "You are not logged in"
        });
    }
}

app.get('/',(req,res) => {
    res.json({
        message: "server active"
    });
});

app.post('/signup', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({username,password});
    res.status(201).json({
        message: "user created"
    });
});

app.get('/signin', auth, (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user=users.find(usr => usr.username===username && usr.password===password);
    const token=jwt.sign({
        username:username
    },JWT_SECRET);
    res.status(200).send({token});
})

app.get('/me', auth, (req,res)=>{
    let founduser=users.find(usr=>usr.username===req.username);
    res.status(200).json({ message: 'User found', user: founduser, password: founduser.password });
})

app.listen(3002);