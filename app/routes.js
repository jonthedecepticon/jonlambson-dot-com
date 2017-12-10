// Dependencies
var mongoose        = require('mongoose');
var Contact         = require('./models/contact.js');

// Opens App Routes
module.exports = function(app) {

  // GET Routes
  // --------------------------------------------------------
  // Retrieve records for all contacts in the db
  app.get('/contacts', function(req, res){
    // Uses Mongoose schema to run the search (empty conditions)
    var query = Contact.find({});
    query.exec(function(err, contacts){
      if(err)
      res.send(err);

      // If no errors are found, it responds with a JSON of all contacts
      res.json(contacts);
    });
  });

  // POST Routes
  // --------------------------------------------------------
  // Provides method for saving new contacts in the db
  app.post('/contacts', function(req, res){
    // Creates a new User based on the Mongoose schema and the post bo.dy
    var newcontact = new Contact(req.body);

    // New User is saved in the db.
    newcontact.save(function(err){
      if(err)
      res.send(err);

      // If no errors are found, it responds with a JSON of the new user
      res.json(req.body);
    });
  });

  // DELETE Routes
  // --------------------------------------------------------
  // Provides method for deleting contacts from the db
  app.delete('/contacts/:id', function(req, res){
    var id = req.params.id;
    Contact.remove({_id: id}, function(err, data) {
      res.json(data);
    });
  });

};
