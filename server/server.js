const express = require("express");
const path = require("path");

const app = express();

const CLIENT_BUILD = path.join(
  __dirname,
  "../client/build"
);

app.use(express.static(CLIENT_BUILD));
app.use(require("./routes"));

app.listen(5000, () => {
  console.log("server is running on http://localhost:5000");
});
