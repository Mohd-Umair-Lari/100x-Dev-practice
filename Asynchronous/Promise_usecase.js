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