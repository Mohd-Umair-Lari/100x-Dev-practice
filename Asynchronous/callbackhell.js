function getData(dataid, getNextData){
    setTimeout(() => {

        console.log("data :",dataid);
        if(getNextData){
            getNextData();
        }
    },2000);
}

// data 1
// data 2
// data 5


getData(1,() => {
    console.log("getting data 2");
    getData(2, () => {
        console.log("getting data 3");
        getData(3, () => {
            console.log("getting data 4");
            getData(4)
        })
    })
});
// getdata is in callback hell as of now
