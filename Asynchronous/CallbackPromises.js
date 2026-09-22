function getData(dataid){
    return new Promise((res,rej) => {
        setTimeout(()=>{
            console.log("data :",dataid);
            res("success");
        },3000);
    })
}


getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
})

// data 1
// data 2
// data 5


// getData(1,() => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3, () => {
//             console.log("getting data 4");
//             getData(4)
//         })
//     })
// });
// getdata is in callback hell as of now


