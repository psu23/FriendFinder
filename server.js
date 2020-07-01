//first, define the node dependencies that will be needed for the server
var express = require("express");
var path = require("path");

//add a dependency to handle body parsing
var bodyParser = require("body-parser");

//set up the express app
var app = express();
var PORT = process.env.PORT || 3000;

//Enable express body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require js app files for api and html;
//app (express) is used as a parameter for these routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//when connection is made to server, alert which port is used
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});