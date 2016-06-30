var mysql = require('mysql');
var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "rendezvous"
  })

module.exports = (function(){
  return {

  create: function(req, res){
    console.log("Posted", req.body);
    var newtrip = {user_id: req.body.user_id,destination:req.body.destination, visiting_lat: req.body.visiting_lat, visiting_long: req.body.visiting_long, arrive_date: req.body.arrive_date, leave_date: req.body.leave_date, radius: req.body.radius, purpose: req.body.purpose, housing: req.body.housing, created_at: new Date(), updated_at: new Date()};
    con.query('INSERT INTO planned_trips SET ?', newtrip, function(err, result){
      if(err){
        res.json(err);
      }
      else {
        res.json(result);
      }
    })
  },


  getsingletrip: function(req,res){
    console.log("posted single trip",req.body);
    con.query('SELECT * FROM planned_trips WHERE id = ?', [req.body.trip_id], function(err, result){
      if(err){
        res.json(err);
      }

      else {
        console.log("giving back single trip details", result);
        if(result.length == 0){
          console.log("Nothing");
          res.json({})
        }
        else {
        res.json({trip:result});
        }
      }
    })
  },

  edittrip: function(req,res){
    console.log("IN the edit_trip controller", req.body);
    con.query('UPDATE planned_trips SET destination = ?, visiting_lat = ?, visiting_long = ?, arrive_date = ?, leave_date = ?, radius = ?, purpose = ?, housing = ? WHERE id = ?', [req.body.destination, req.body.visiting_lat, req.body.visiting_long, req.body.arrive_date, req.body.leave_date, req.body.radius, req.body.purpose, req.body.housing], function(err, result){
      if(err){
        res.json(err);
      }
      else {
        console.log("giving back trip details", result);
        if(result.length == 0){
          console.log("Nothing");
          res.json({})
        }
        else {
        res.json({trip:result});
        }
      }
    })
  },

  getalltrips: function(req, res){
    con.query('SELECT * FROM planned_trips', function(err, rows){
      if(err){
        res.json(err);
      }
      else {
        console.log("returning all trips")
        res.json(rows);
      }
    })
  }

 }
})();
