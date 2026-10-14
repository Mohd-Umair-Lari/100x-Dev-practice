function transform(n){
    return n*2;
}

const numbers=[1,2,3,4,5];
const transformed=numbers.map(transform);   // using map as a transform function
console.log(transformed);