// Using expres to perform our server operations
var express = require("express");

// Using routers the routes for the server
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var user = require("../models/user.js");

var investmentModel = require("../models/investmentModel.js");
//===========================================================================================
router.get("/", function(req, res) {//=== For this we need "get"
   // request function "route" to define data
  var hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("landingPage", hbsObject);
  });
});
//===========================================================================================

// Create all our routes and set up logic within those routes where required.

router.post("/", function(req, res) { //== Posting a client request through this route to 
  burger.create([                     // create a "new burger object" with given params.
    "user_name", "devoured", "createdAt"
  ], [
    req.body.investmentModel_name, req.body.devoured, req.body.date
  ], function() {
    res.redirect("/");  //=== Now updating the response with the given "condition"
  });
}); 

//====================================================================================
router.put("/:id", function(req, res) { // Redirecting the route for "object burger" with 
  var condition = "id = " + req.params.id; // a given "id" for "condition: devoured" 

  console.log("condition", condition);

  user.update({                //== Now updating the response with the given "condition"
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

//====================================================================================
router.put("/:id", function(req, res) {  // Using the request "put" for a specific "condition"
 var condition = "id = " + req.body.id;  // with a given "id" for "delete" route.

 console.log("condition", condition);

 user.delete({             // === Now updating the response with the given "condition"
   devoured: req.body.id
 }, condition, function() {
   res.redirect("/");
 });
});


// Export routes for server.js to use.
module.exports = router;


