const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors()); // Enable CORS to allow requests from your React app
const names = ["nawaz shareef", "chinna", "moses", "javeed"];
app.get("/api/names", (req, res) => {
  res.json(names);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
