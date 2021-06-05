const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/updateToDoList", (req, res) => {
  try {
    fs.writeFile("./database/todoList.json", JSON.stringify(req.body), (err) => {
      res.send("toDolist update");
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/toDoList", (req, res) => {
  try {
    fs.readFile("./database/todoList.json", "utf8", (err, data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
