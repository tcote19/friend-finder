
var friends = require("../data/friends");
var data = "";
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {


  });

  app.post("/api/friends", function(req, res) {
    var userData = req.body;
    var userScores = userData.scores;
    var friendsScores = friends[0].scores;
    console.log(userScores, "userScore");
    console.log(friendsScores, "friendsScores");
  });

};