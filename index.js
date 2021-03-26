const express = require("express");

const app = express();
app.get("/home", (req,res)=>{
    res.send('Hello from simple calculator')
})

app.listen(3000, () =>{
    console.log('listening from port 3000')
})