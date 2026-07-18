const fsa=require("fs");

function print(err, data){
    console.log(data);
}

const content=fsa.readFile("read.txt","utf-8",print);
const content2=fsa.readFile("b.txt","utf-8",print);

console.log("Done reading files");