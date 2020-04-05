//Imports
const express = require("express");
const port = 8000;

//App and DB
const db = require("./config/mongoose");
const app = express();

//Middleware, assets and views
app.use(express.static("assets"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/", require("./routes"));

//Starting the server
app.listen(port, function (error) {
  if (error) {
    console.log("Error while starting the server");
    return;
  }
  console.log("Server is up and running ", port);
});
