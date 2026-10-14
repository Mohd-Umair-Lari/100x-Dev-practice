let promise1 = new Promise((resolve,reject)=>{
    console/log("This is promise 1");
    reject("some error");
});


let promise2 = new Promise((resolve,reject)=>{
    console/log("This is promise 2");
    resolve("Success");
});
