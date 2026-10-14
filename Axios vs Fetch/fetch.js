function main(){
    fetch('http://localhost:3000/')
    .then(async response => {
            const data=await response.text();
            console.log(data);
        }
    );
}

async function mainfetch(){
    const response=await fetch('http://localhost:3000/');
    const data=await response.text();
    console.log(data);
}

main();
mainfetch();