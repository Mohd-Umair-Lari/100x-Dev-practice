const express = require('express');
const app = express();
const fs=require('fs');
fs.readFile('a.txt','utf-8',function(err, data){
    if(!err){
        console.log(data);
    }else{
        console.log(err);
    }
})

app.get('/',function(req,res){
    data=fs.readFileSync('a.txt','utf-8');
    res.send(data);
})

app.listen(3000);