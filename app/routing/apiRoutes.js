// Activity 16
var friendData = require("../data/friends.js");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {

        // Need JS Here
        var potentialFriend = req.body;
        var overallDiff = [];
        var potentialMatches = [];
   
        if (friendData.length >= 1) {
            
            friendData.forEach(function(friend) {
                var difference = 0;
                var differenceTemp = parseInt(friend.total) - parseInt(potentialFriend.total);
                difference = difference + Math.abs(differenceTemp);
                overallDiff.push(difference);

            });

            var minDiff = Math.min.apply(Math, overallDiff);
            for (var i = 0; i < overallDiff.length; i++) {
                if (overallDiff[i] === minDiff) {
                    potentialMatches.push(friendData[i]);
                }
            }

            res.json(potentialMatches);
        }
        friendData.push(potentialFriend);
    });
 }