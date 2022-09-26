const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send({hi : "there"});
});

app.listen(5001, (req, res)=> {
    console.log('Listening to port 5001');
});