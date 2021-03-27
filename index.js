const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req,res) =>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
     let result = num1 + num2;

     res.send("The result of adding the number is " + result)
})

app.get("/bmi", (req,res) =>{
    res.sendFile(__dirname + "/bmi.html" )
})

app.post("/bmi", (req,res)=>{

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);
    res.send("Your bmi is " + bmi);
})

app.listen(3000, () =>{
    console.log('listening from port 3000')
})