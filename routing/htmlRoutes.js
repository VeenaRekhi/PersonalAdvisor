// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var models = require("../models");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // Default route to home

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/landingPage.html"));
  });

  // app.get("/logIn", function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/login"));
  // });
  // gets the webpage that has the logIn/registration form

  app.get("/logOut", function(req, res) {
    res.render("logOut");
  });
  // destroys session and redirects to /
  //Execute logout in the backend and return JSON for denoting the success/failure of the operation
  
  app.post("/logIn", function(req, res) {
    res.render("logIn");
  });
  //Submit credentials to the backend. Return success/failure. 
  //If successful, normally it will also return the session token as well as the profile information.
  
  app.post("/register", function(req, res) {
    res.render("register");
  });
  //Submit registration to the backend. Return success/failure. 
  //If successful, normally treated the same as successful login or you could choose to make registration as a distinct service
  
  // // Route for creating a new user with id and details
  // app.post("/add/user/:id", function(req, res) {
  //   res.render("register", {});
  // });

  //Get user profile and return JSON data format for the user's profile
  app.get("/user/:id", function(req, res) {
    res.render("logIn", {});
  });

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/modelSelection", function(req, res) {
    
    res.sendFile(path.join(__dirname, "/../public/modelSelection.html"));
  });



  app.get("/userPortfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/userPortfolio.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/landingPage.html"));
  });//end app.get
};//end module.exports
