const express = require("express");

const app=express();
let errorCount=0;

app.get('/error',(req,res)=>{
    throw new Error("some Error");
})

app.get('/user',(req,res)=>{
    res.status(200).json({msg:"dummy user created"});
});

app.get('/errorcount',(req,res)=>{
    res.status(200).json({errorCount});
});


// we use the error middle ware at the end of the code and we avoid sending the standat 500 code for th error caused on our server
app.use((err, req, res, next)=>{
    res.status(404).send({msg:"fck off"});
    errorCount=errorCount+1;
})

app.listen(3000);