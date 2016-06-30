
var users = require('../controllers/users.js');
var trips = require('../controllers/trips.js');
var friends = require('../controllers/friends.js');

module.exports = function(app){

  //user queries
  app.get('/users/getall', function(req, res){
    console.log("Getting stuff");
    users.index(req, res)
  })

  app.post('/usersettings', function(req,res){
    console.log("Routes to get user settings", req.body);
    users.getusersettings(req, res);
  })

  app.post('/adduser', function(req, res){

    console.log("Routes,", req);
    users.create(req, res);
  })

  app.post('/update_user_region', function(req, res){
    console.log("Routes to update user region,", req);
    users.update_region(req, res);
  })

  ///this gets a single user for login/reg. Changed name for troubleshooting purposes
  app.post('/singlesquid', function(req, res){
    // res.json({message: "Got your json"})
    console.log("Routes to find user", req.body);
    users.finduser(req, res);
  })

  app.post('/hideuser', function(req, res){
    // res.json({message: "Got your json"})
    console.log("Routes to hide user", req.body);
    users.hideuser(req, res);
  })


  //trip queries

  app.post('/getsingletrip', function(req,res){
    console.log("Routes to get single trips", req.body);
    trips.getsingletrip(req, res);
  })

  app.post('/addtrip', function(req, res){
    console.log("Routes to add a trip", req.body);
    trips.create(req, res);
  })

  app.post('/updatetrip',function(req,res){
    console.log("Routes to edit trip", req.body);
    trips.edittrip(req, res);
  })

  app.post('/getalltrips', function(req,res){
    console.log("Routes to find all trips", req.body);
    trips.getalltrips(req, res);
  })

  //friends controller
  app.post('/createfriendship',function(req,res){
    console.log("Routes to create friendship post", req.body);
    friends.create_friendship(req, res);
  })

  app.post('/getuserfriends',function(req,res){
    console.log("Routes to find all users friends and their info", req.body);
    friends.getuserfriends(req, res);
  })


}
