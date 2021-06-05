const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/updateBasket", (req, res) => {
  try {
    fs.writeFile("./database/basket.json", JSON.stringify(req.body), (err) => {
      res.send("basket update");
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/statistic", (req, res) => {
  try {
    fs.writeFile("./database/stats.json", JSON.stringify(req.body), (err) => {
      res.send("stats update");
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/catalogData", (req, res) => {
  try {
    fs.readFile("./database/catalog.json", "utf8", (err, data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/basketData", (req, res) => {
  try {
    fs.readFile("./database/basket.json", "utf8", (err, data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/statistic", (req, res) => {
  try {
    fs.readFile("./database/stats.json", "utf8", (err, data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
