// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
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

  // app.get("/images", function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/img/img1.jpeg"));
  // });


  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/landingPage.html"));
  });
};
