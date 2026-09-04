const express = require('express');

const app = express();
const app2 = express();

function sum2(a, b) {
    return a + b;
}

function sumall(n){
    let sum = 0;
    for(let i=0;i<n;i++){
        sum += i;
    }
    return sum;
}

// req => request & res => response

app.get('/', (req, res) => {
    let n = req.query.n;
    let sum = sumall(n);
    res.send(`Sum of numbers from 0 to ${n} is ${sum}`);
});

app2.get('/', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    let sum = sum2(a, b);
    res.send(`Sum of ${a} and ${b} is ${sum}`);
});

app.listen(3000);
app2.listen(3001);