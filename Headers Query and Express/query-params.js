const express=require("express");

const app=express();

app.get("/add/:a/:b", function(req,res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);

    res.json({
        answer: a+b
    })
});

app.listen(3003);