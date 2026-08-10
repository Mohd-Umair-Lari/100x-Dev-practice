function setTimeoutPromise(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromise(1000).then(function(){
    console.log("Hi");
    setTimeoutPromise(3000).then(function(){
        console.log("Hello");   
        setTimeoutPromise(5000).then(function(){
            console.log("World");
        });
    });
});

