const axios=require('axios');

function main(){
    axios.get('http://localhost:3000/')
    .then(response => {
        console.log(response.data);
        console.log("using promisified response");
    });
}

async function mainaxios(){
    const response=await axios.get('http://localhost:3000/');
    console.log(response.data);
    console.log("using async await response");
}

mainaxios();
main();