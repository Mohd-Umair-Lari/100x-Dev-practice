function sum(a,b){
    return parseInt(a)+parseInt(b);
}

function calculator(a,b,sumcallback){
    return sumcallback(a,b);
}
const res=calculator(5,6,sum);
console.log(res);
