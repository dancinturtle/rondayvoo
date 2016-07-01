var mysql = require('mysql');
var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "rendezvous"
  })

// var Employee = mysql.model('Employee');

module.exports = (function(){
  return {

    //this is not installed into SWIFT YET - Weds 5pm
    create_friendship: function(req, res){
      console.log("Posted", req.body);
      var newfriendship = {
        user_id: req.body.user_id,
        friend_id: req.body.friend_id,
        block_user_visibility: 0,
        status: "accepted"
      };

      con.query('INSERT INTO friendships SET ?', newfriendship, function(err, result){
        if(err){
          res.json(err);
        }
        else {
          res.json(result);
        }
      })
    },


    getuserfriends: function(req, res){
      con.query('SELECT * FROM friendships LEFT JOIN users on friend_id = users.id WHERE user_id = ?',[req.body.user_id], function(err, rows){
        if(err){
          res.json(err);
        }
        else {
        res.json(rows);
        }
      })
    }

    // //just a guess until we have final DB/SWIFT inputs.
    // hidefromfriend: function(req,res){
    //   console.log("IN the hidefriend controller", req.body);
    //   con.query('UPDATE friends SET hide = ? WHERE id = ?', [req.body.hide, req.body.user_id], function(err, result){
    //     if(err){
    //       res.json(err);
    //     }
    //     else {
    //       console.log("giving back", result);
    //       if(result.length == 0){
    //         console.log("Nothing");
    //         res.json({})
    //       }
    //       else {
    //       res.json({friendshiphide:result});
    //       }
    //     }
    //   })
    // }

  }//closes return
})();
