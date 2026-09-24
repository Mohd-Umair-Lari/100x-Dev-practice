express = require("express");

app=express();
let reqcount=0;

// Middleware template
function counter(req,res,next){
    reqcount+=1;
    console.log(`The number of request till now is : ${reqcount}`);
    req.name="Random123";       // the middleware has capability to change the request to the router
    if(reqcount>100){                  // the request can be ended without the change capability to end the req-res cycle
        res.json({
            message : "Premature request end"
        })
    }
}


app.get("/sum",counter,(req,res)=>{
    a=parseInt(req.query.a);
    b=parseInt(req.query.b);
    console.log(req.name);
    res.json({
        ans : a+b
    })
})

app.get("/multiply",counter,(req,res)=>{
    a=req.query.a;
    b=req.query.b;
    res.json({
        ans : a*b
    })
})

app.get("/divide",counter,(req,res)=>{
    a=req.query.a;
    b=req.query.b;
    res.json({
        ans : a/b
    })
})

app.get("/subtract",counter,(req,res)=>{
    a=parseInt(req.query.a);
    b=parseInt(req.query.b);
    res.json({
        ans : a-b
    })
})

app.listen(3000);