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


var port = process.env.PORT || 3306;   // setting up port at localhost 3306.

var app = express();  // setting up variable app with express server functioning

//app.set('port', (process.env.PORT || 3306));
// Serving static content for the app(program) from the "public" directory(client side) 
//to the Application directory(server side).

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded ({ extended: false })); // using bodyparser(json-parser) for encoding the url.
// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

