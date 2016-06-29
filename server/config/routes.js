
var users = require('../controllers/users.js');
var trips = require('../controllers/trips.js');

module.exports = function(app){

  app.get('/users/getall', function(req, res){
    console.log("Getting stuff");
    users.index(req, res)
  });

  app.post('/adduser', function(req, res){
    console.log("Routes,", req);
    users.create(req, res);
  });

  app.post('/update_user_region', function(req, res){
    console.log("Routes to update user region,", req);
    users.update_region(req, res);
  });

  app.post('/finduser', function(req, res){
    console.log("Routes to find user", req.body);
    users.finduser(req, res);
  })

  app.post('/addtrip', function(req, res){
    console.log("Routes to add a trip", req.body);
    trips.create(req, res);
  })






}
