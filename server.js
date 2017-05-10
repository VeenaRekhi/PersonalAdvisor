// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

var app = express();                   // setting up variable app with express server functioning
var PORT = process.env.PORT || 8080;   // setting up port at localhost 3306.

// Requiring our models for syncing
var db = require("./models");

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded ({ extended: false })); // using bodyparser(json-parser) for encoding the url.

// Serving static content for the app(program) from the "public" directory(client side) 
//to the Application directory(server side).
app.use(express.static("./public"));

// handlebars======================================================================
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/model-apiRoutes")(app);
require("./routing/user-apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// Syncing our sequelize models and then starting our express app
// The below code effectively "starts" our server
// ==============================================================================
db.sequelize.sync().then(function() {
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
  });
});

