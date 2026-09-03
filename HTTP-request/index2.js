const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.json({
        data:'hello world'
    });
})

app.listen(3001);