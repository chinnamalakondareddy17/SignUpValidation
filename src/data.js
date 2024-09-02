const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.json");

app.use(cors());
app.use(express.json());

app.get("/data.json", function (req, res) {
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
