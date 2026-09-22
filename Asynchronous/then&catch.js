
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

data.then(()=>{
    console.log(
        "Promise completed successfully"
    );
});

data.catch(()=>{
    console.log("Promise Failed")
})