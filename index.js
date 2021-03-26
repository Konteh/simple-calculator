const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req,res) =>{
    console.log(req.body)
    res.send("received the parse-body")
})

app.listen(3000, () =>{
    console.log('listening from port 3000')
})