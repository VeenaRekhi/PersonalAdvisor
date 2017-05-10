// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on modelData etc.
// ===============================================================================
var models = require("../models");
var modelData = require("../models/model.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  //   app.get("/api/user/:user_id/:password", function(req, res) {
  //     var condition = "user_id = " + req.params.user_id;
  //     condition += " AND password = " + req.params.password; 
  //     user.all({                
  //       user_id,
  //       password
  //     }, condition, function() {
  // //    res.json(friendsData);
  // //      res.redirect("/");
  //     });
  //   });
  // ---------------------------------------------------------------------------
  // get all the models from the user's portfolio/model
  app.post("/model/:id", function(req, res) {

    if (req.params.id) {
    models.model.findAll({}).then(function(modelsModel) {
    
        res.json(modelsModel);
      }) //end then.function
    }
  });
  // ---------------------------------------------------------------------------

  //Post updated profile information as JSON format and update the information in the backend. 
  //Return success/failure to the caller
  // Get all models by user_Id
  app.get("/api/model/:user_id", function(req, res) {
    if (req.params.user_id) {
      models.model.findAll({
        where: {
          user_id: req.params.user_id
        }
      }).then(function(modelsModel) {
        res.json(modelsModel);
      });
    }
  }); // End app.get
  // ---------------------------------------------------------------------------

  // API POST with create new model Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a "e-friends" enrollment request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  
  // Create new models for the user's portfolio
  app.post("/api/model", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have been accepted or not.
    // It will do this by sending out the value "true" have been accepted.
     models.Model.Create({
      risk_tolerance: req.body.risk_tolerance,
      investment_duration: req.body.investment_duration,
      initial_deposit: req.body.initial_deposit,
      monthly_contribution: req.body.monthly_contribution,
      yearly_contribution: DataTypes.STRING,
      email_alerts: req.body.email_alerts,
      selected_model: req.body.selected_model
     })
     .then(function(newModel){
      res.json(newModel);
     });
    
  });//end app.post

  // ---------------------------------------------------------------------------
    
  // Delete existing models from the user's portfolio
  app.delete("/api/model/:id", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have been accepted or not.
    // It will do this by sending out the value "true" have been accepted.
     models.Model.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(modelsModel){
      res.json(modelsModel);
    });     
    
  });//end app.post  // req.params.id

  // ---------------------------------------------------------------------------

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/model", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    models.model.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(modelsModel) {
      res.json(modelsModel);
    });
  });
  // ---------------------------------------------------------------------------

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    modelData = [];

    console.log(modelData);
  });
};
