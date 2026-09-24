express = requiure("express");

app=express();

app.get("/sum",(req,res)=>{
    a=parseInt(req.query.a);
    b=parseInt(req.query.b);
    res.json({
        ans : a+b
    })
})

app.get("/multiply",(req,res)=>{
    a=req.query.a;
    b=req.query.b;
    res.json({
        ans : a*b
    })
})

app.get("/divide",(req,res)=>{
    a=req.query.a;
    b=req.query.b;
    res.json({
        ans : a/b
    })
})

app.get("/subtract",(req,res)=>{
    a=parseInt(req.query.a);
    b=parseInt(req.query.b);
    res.json({
        ans : a-b
    })
})

app.listen(3000);