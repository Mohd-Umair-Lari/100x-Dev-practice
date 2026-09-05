const express=require("express");

const app=express();

requestcount=0;

requests={};
setInterval(()=>{
    requests={};
},1000)

app.use(function (req, res, next){
    requestcount+=1;
    const userid=req.header["user-id"];
    if(requests[userid]){
        requests[userid]+=1;
        if(requests[userid]>5){
            res.status(404).send("rate limited");
        } else {
            next();
        }
    } else {
        requests[userid]=1;
        next();
    }
});

app.get('/user',(req,res)=>{
    res.status(200).json({
        name:"John"
    });
});

app.get('/requestcount', (req,res)=>{
    res.json({
        count:requestcount
    });
});

app.listen(3006);