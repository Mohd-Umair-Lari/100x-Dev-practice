const express = require('express');

const app = express();
app.use(express.json());

var users = [
    {id: 1, name: 'John', age: 20, kidney:[{healthy: true},{healthy: true}]},
    {id: 2, name: 'Sandra', age: 22, kidney:[{healthy: false},{healthy: true}]},
    {id: 3, name: 'katie', age: 23, kidney:[{healthy: true},{healthy: false}]},
    {id: 4, name: 'Charlie', age: 24, kidney:[{healthy: false},{healthy: true}]},
    {id: 5, name: 'Kill', age: 25, kidney:[{healthy: true},{healthy: false}]},
]

app.get('/',(req, res) => {
    const n = Number(req.query.n);
    var user=users.find(user => user.id === n);
    if (!user) {
        return res.status(404).send("User not found.");
    }
    else {
        let number_kidney=user.kidney.length;
        let healthy_kidney=0;
        let unhealthy_kidney=0;
        for(let i=0;i<number_kidney;i++){
            if(user.kidney[i].healthy){
                healthy_kidney+=1;
            } else {
                unhealthy_kidney+=1;
            }
        }
        res.json({
            number_kidney,
            healthy_kidney,
            unhealthy_kidney
        });
    }
});

app.put('/', (req, res) => {
    const status = req.body.status;
    const id = Number(req.query.n);
    var user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).send("User not found.");
    }
    for (let i = 0; i < user.kidney.length; i++) {
        user.kidney[i].healthy = status;
    }
    res.json({
        msg: "Kidneys updated."
    });
});


app.delete('/', (req,res)=>{
    const kidney_num = Number(req.query.kidney_num);
    const id = Number(req.query.n);
    var user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).send("User not found.");
    }
    if (Number.isNaN(kidney_num) || kidney_num < 0 || kidney_num >= user.kidney.length) {
        return res.status(400).send("Kidney not found.");
    }
    user.kidney.splice(kidney_num, 1);
    res.json({
        msg: "Kidney " + kidney_num + " removed.",
        remaining_kidneys: user.kidney
    });
});

app.post('/', (req, res) => {
    const status = req.body.status;
    const id = Number(req.query.n);
    var user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).send("User not found.");
    }
    user.kidney.push({
        healthy: status
    });
    res.json({
        msg: "Kidney added."
    });
});

app.listen(3002);