const express=reequire("express");

const app=express();

// this is a middleware function that does the age logic
function ticketChecker(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();
    } else {
        res.status(403).resend("Access Denied");
    }
}

// use the middleware before the required function else of no use/
app.use(ticketChecker);

app.get("/ride1", ()=>{
    res.send("You rode the first ride");
});

app.get("/ride2", ()=>{
    res.send("You rode the second ride");
});

app.get("/ride3", ()=>{
    res.send("You rode the third ride");
});

app.listen(3005);