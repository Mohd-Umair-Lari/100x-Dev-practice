function call(){
    console.log("this is the callback function");
}


console.log("this is the first line of code");

setTimeout(call, 5000);

console.log("this is the last line of code");
