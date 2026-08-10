const fs = require('fs');

function readFileAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile('aa.txt', 'utf8', (err, data) => {
            if(err) reject("File not found");
            else resolve(data);
        });
    });
}

readFileAsync().then(function(data) {
    console.log("the file has been read successfully");
}).catch(function(err) {
    console.log("the file has not been read successfully");
    console.log(err);
});