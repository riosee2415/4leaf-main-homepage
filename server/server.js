const express = require("express");
const path = require("path");
const os = require("os");

const app = express();
const PORT = 4000;

// connect

app.use(express.static(path.join(__dirname, "..", "public/")));
// app.use("view engine", "react");

app.get("/getUsername", (req, res, next) => {
  res.send({
    username: os.userInfo().username
  });
});

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);
});
