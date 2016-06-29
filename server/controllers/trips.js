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
  }

  }

})();
