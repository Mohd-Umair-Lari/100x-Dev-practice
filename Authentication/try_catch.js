function getlength(name){
    return name.length;
}
try{
    const ans=getlength("Umair");
    console.log(ans);
}
catch(err){
    console.log("input correctly!");
}

console.log("Outside the try catch statements.");