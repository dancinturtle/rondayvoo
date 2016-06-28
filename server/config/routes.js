
var users = require('../controllers/users.js');

module.exports = function(app){

  app.get('/users/getall', function(req, res){
    console.log("Getting stuff");
    users.index(req, res)
  });

  app.post('/adduser', function(req, res){
    console.log("Routes,", req);
    users.create(req, res);
  });




}
