// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a Contact Schema. This will be the basis of how user data is stored in the db
var ContactSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  message: {type: String, required: true},
});

// Exports the ContactSchema for use elsewhere. Sets the MongoDB collection to be used as: "contacts"
module.exports = mongoose.model('contact', ContactSchema);
