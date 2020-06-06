//Includes
const express = require("express");
const path = require("path");
const chalk = require("chalk");
const morgan = require("morgan");
const debug = require("debug")("server");
const bodyParser = require("body-parser");
const ip = "localhost";
debug(chalk.redBright("===> Starting server in debug mode."));

//Server Initialization
var server = express();

//Server Port specification
server.set("port", process.env.PORT || 3000);

//==Middlewares==

//Body Parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

//Static Files
server.use(express.static(path.join(__dirname, "/src/public")));

//EJS View engine
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "/src/views"));

//Morgan logger
server.use(morgan("tiny"));

//====Routing=====
const publicRouter = require("./src/routes/public");

server.use("/", publicRouter);

//Server Listen
server.listen(server.get("port"), ip, function () {
  console.log(
    "OrmaeApp Server started at : " +
      Date() +
      " at port : " +
      chalk.greenBright(server.get("port"))
  );
});
