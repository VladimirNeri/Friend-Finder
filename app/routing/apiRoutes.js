// Activity 16
var friendData = require("../data/friends.js");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
       
        // Need JS Here
        var userData = req.body;
        var overallDiff = [];
        var potentialMatches = [];
    
            
        function sumArr(arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum = sum += Number(arr[i]);
            }
            return sum;
        }
        
        console.log(sumArr(userData.scores));
    
        if (friendData.length >= 1) {

            var totalDifference;
            
            for (var i = 0; i < friendData.length; i++) {
                var currentFriend = friendData[i];
                totalDifference = 0;
                console.log(currentFriend.name);

                 //  Compare scores of current friend and user score.  
                 
            }

            //  Compare scores of current friend and user score.  
            //

            // friendData.forEach(function(friend) {
            //     var difference = 0;
            //     var differenceTemp = parseInt(friend.total) - parseInt(userData.total);
            //     difference = difference + Math.abs(differenceTemp);

            //     overallDiff.push(difference);

            // });

            // var minDiff = Math.min.apply(Math, overallDiff);
            
            // for (var i = 0; i < overallDiff.length; i++) {
                
            //     if (overallDiff[i] === minDiff) {
            //         potentialMatches.push(friendData[i]);
            //     }
            // }

            // res.json(potentialMatches);

        }
        friendData.push(userData);
    });
 }