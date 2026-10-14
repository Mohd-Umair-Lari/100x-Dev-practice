function multiply(i){
    return 2*i;
}

function process(arr,multiply){
    for(let i=0;i<arr.length;i++){
        arr[i]=multiply(arr[i]);
    }
    return arr;
}

const arr=[1,2,3,4,5];
const result=process(arr,multiply);
console.log(result);