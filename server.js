//Require for express
var express = require("express");
//Require for path
var path = require("path");

//Tells node that we are creating an express server
var app = express();
//Sets initial port
var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes that give the server a map of how to respond when users visit or request data from various URLs
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Starts the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});