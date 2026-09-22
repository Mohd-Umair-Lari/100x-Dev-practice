function asyncfxn(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("some Data 1");
            res("Success");
        },4000)
    });
}

function asyncfxn2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("some Data 2");
            res("Success");
        },4000)
    });
}

console.log("Fetching data1.......")
let p1=asyncfxn();
p1.then((res)=>{
    console.log(res);
});

console.log("Fetching data2.......")
let p2=asyncfxn2();
p2.then((res)=>{
    console.log(res);
});


// usning promises directly
console.log("fetching data 1");
asyncfxn().then((res)=>{
    console.log(res);
    console.log("fetching data 2");
    asyncfxn2().then((res)=>{
        console.log(res);
    })
})