
function getData(Dataid, getnextdata){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            res("Success");
            if(getnextdata){
                getnextdata();
            }
        },5000)

    });
}

let data=getData(123);

data.then((res)=>{
    console.log("Promise completed successfully",res);
});

data.catch((rej)=>{
    console.log("Promise Failed",rej)
})