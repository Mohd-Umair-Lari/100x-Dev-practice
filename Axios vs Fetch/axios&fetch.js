const axios = require('axios');

// the request type is passed as an object in the fetch function
async function fetchPost() {
    const response = await fetch('http://localhost:3000/post', {
        method: 'POST',
        body: JSON.stringify({
            name: 'John',
            age: 30
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'
        },
    });
    const data = await response.text();
    console.log(data);
}


// the request type is associated with the method of the request
async function axiosPost() {
    const response = await axios.post('http://localhost:3000/post', {
        name: 'John',
        age: 30
    }, {
        headers: {
            'Authorization': 'Bearer'
        }
    });
    console.log(response.data);
}

fetchPost();
axiosPost();
