const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", (req,res)=>{
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) + Number(num2);
  res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

app.post("/bmiCalculator", (req, res) => {
  
  const weight = parseFloat(req.body.weight)
  const height = parseFloat(req.body.height)

  const result = weight / (height * height);
  res.send(`Your BMI is ${10000*result}`);
})


app.listen(3000, () => {
  console.log("Calculator backend server is running on port 3000");
});
