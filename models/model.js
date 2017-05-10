
module.exports = function(sequelize, DataTypes) {
  var Model = sequelize.define("Model", {
    risk_tolerance: DataTypes.STRING,
    investment_duration: DataTypes.STRING,
    initial_deposit: DataTypes.STRING,
    monthly_contribution: DataTypes.STRING,
    yearly_contribution: DataTypes.STRING,
    email_alerts: DataTypes.STRING,
    selected_model: DataTypes.STRING
  });
  return Model;
}


























// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var portfolio = {
// //===================================================================================================
//   all: function(cb) {   // In this assignment when there will be request of "get" from client side 
//     orm.all("portfolio", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   // Function where we are processing the "post" request from the client side.
// //===================================================================================================

//   create: function(cols, vals, cb) {
//     orm.create("portfolio", cols, vals, function(res) {
//       cb(res);
//     });
//   },
// //====================================================================================

//   // Function where we are processing the "update == put" request from client side.
//   update: function(objColVals, condition, cb) {
//     orm.update("portfolio", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },

// //====================================================================================
//   // Function where we are processing the "done == delete" request from client side.
//   delete: function(condition, cb) {
//     orm.delete("portfolio", condition, function(res) {
//       cb(res);
//     });
//   }
// };
//====================================================================================

// Export the database functions for the controller (modelController.js).
// module.exports = portfolio;

