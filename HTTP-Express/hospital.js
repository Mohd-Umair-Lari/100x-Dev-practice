const express = require('express');

const app = express();

var users = [
    {id: 1, name: 'John', age: 20, kidney:[{healthy: true},{healthy: true}]},
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
    const status=req.body.status;
    const id=req.query.n;
    users[n].kidney.push({
        healthy:status
    })
});

app.delete('/', (req, res) => {

});

app.post('/', (req, res) => {

});

app.listen(3002);