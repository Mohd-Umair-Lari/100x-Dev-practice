const express = require('express');
const fs = require('fs');
const path = require('path');
const dir = __dirname;

const app = express();

app.get('/files', (req, res) => {
    const files = fs.readdirSync(dir);
    res.json({
        files: files
    });
});

app.get('/files/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const files = fs.readdirSync(dir);
    var flag = false;
    for (const file of files) {
        if (file === fileName) {
            flag = true;
        }
    }
    if (!flag) {
        return res.json({
            msg: "file not found"
        });
    }
    const data = fs.readFileSync(path.join(dir, fileName), 'utf-8');
    res.json({
        content: data
    });
});

app.listen(3003);
