const fs=require("fs");

const content=fs.readFileSync("read.txt","utf-8");
console.log(content);