const express = require("express");
const app = express();
const mongoDB = require("./backend/DB/connection");

mongoDB()
  .then((da) => console.log("success1"+da))
  .catch((err) => console.log("error1"+error));

app.get("/", (req, res) => {
  res.send("<html><body><h1>Hello World</h1></body></html>");
});

app.post("/submit-data", (req, res) => {
  res.send("added")
});

app.put("update-data", () => {
  res.send("updtaed")
})

app.delete("delete-data", () => {
  res.send("deleted")
})

app.listen(3000, () => console.log("started"))
