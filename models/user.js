// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var user = {
//===================================================================================================
  all: function(cb) {   // In this assignment when there will be request of "get" from client side 
    orm.all("user", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  // Function where we are processing the "post" request from the client side.
//===================================================================================================

  create: function(cols, vals, cb) {
    orm.create("user", cols, vals, function(res) {
      cb(res);
    });
  },
//====================================================================================

  // Function where we are processing the "update == put" request from client side.
  update: function(objColVals, condition, cb) {
    orm.update("user", objColVals, condition, function(res) {
      cb(res);
    });
  },

//====================================================================================
  // Function where we are processing the "done == delete" request from client side.
  delete: function(condition, cb) {
    orm.delete("user", condition, function(res) {
      cb(res);
    });
  }
};
//====================================================================================

// Export the database functions for the controller (userController.js).
module.exports = user;

