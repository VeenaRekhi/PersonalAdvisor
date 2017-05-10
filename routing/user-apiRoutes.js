// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friendsData etc.
// ===============================================================================
var models = require("../models");

var userData = require("../models/user.js");
var modelData = require("../models/model.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  app.get("/api/user/:user_id", function(req, res){
    if (req.params.user_id) {
      models.user.findOne({
        where: {
          email: req.params.user_id,
          password: req.params.password
        }
      })
    .then(function(modelsUser) {
        res.json(modelsUser);
      });
    }
  });
// ---------------------------------------------------------------------------

  // API POST with create new model Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a "login/register or new model addition" request... this data is then sent to the server...
  // Then the server saves the data to the userData array)
  
  // Create new "user" model for the user
  app.post("/api/user", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have been accepted or not.
    // It will do this by sending out the value "true" have been accepted.
     models.User.Create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
     })
     .then(function(newUser){
      res.json(newUser);
     });
    
  });//end app.post

// ---------------------------------------------------------------------------

  // PUT route for updating users. We can get the updated user data from req.body
  app.put("/api/user", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    models.user.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        user_id: req.body.user_id
      }
    }).then(function(modelsUser) {
      res.json(modelsUser);
    });
  });
// ---------------------------------------------------------------------------

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a "delete existingmodel" enrollment request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)

  // Delete existing models from the user's portfolio
  app.delete("/api/user/:id", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have been accepted or not.
    // It will do this by sending out the value "true" have been accepted.
     models.User.destroy({
      where: {
        user_id: req.params.id
      }
    }).then(function(modelsModel){
      res.json(modelsModel);
    });     
    
  });//end app.post  // req.params.id
  // ---------------------------------------------------------------------------
//Now, wrap the nexmo.message.sendSms() with the Express post route method. 
//Let’s set the type to 'unicode' so you can send some emoji too! 
//Also, print out the success response at the callback.


// app.post('/send', (req, res) =>; {
//   // Send SMS
//   nexmo.message.sendSms(
//     config.number, req.body.toNumber, req.body.message, {type: 'unicode'},
//     (err, responseData) => {if (responseData) {console.log(responseData)}}
//   );
// });


  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    userData = [];

    console.log(userData);
  });
};
