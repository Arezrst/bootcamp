const express = require("express");
const cors = require("cors");


const app = express();
const bodyParser = require("body-parser");


app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

let First;
let Second;

app.post("/", (req, res) => {
  First = req.body.First;
  Second = req.body.Second;
});
app.get("/dice", (req, res) => {

  res.json(rollDice());
});


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
app.listen(4200, () => {
  console.log("is ok!");
});