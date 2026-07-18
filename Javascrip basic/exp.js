function call(){
    console.log("this is the callback function");
}


console.log("this is the first line of code");

setTimeout(call, 1000);


// 3-4 sec for executing the for loop
for(let i=0;i<1000000000;i++){
    //this is a loop
}

console.log("this is the last line of code");
