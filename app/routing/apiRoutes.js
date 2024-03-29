// Activity 16
var friends = require("../data/friends.js");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
	   
		// Create an object to hold best match 
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		  };
	  
		// Store user data in req.body . Activity 13.
		  var userData = req.body;
		  var userScores = userData.scores;
		  var totalDifference = 0;
	
		  for (var i = 0; i < friends.length; i++) {
			console.log(friends[i].name);
			totalDifference = 0;
	  
			for (var j = 0; j < friends[i].scores[j]; j++) {
			// used Math.abs to calculate absolute value and determine best scores
			  totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
			  if (totalDifference <= bestMatch.friendDifference) {
				bestMatch.name = friends[i].name;
				bestMatch.photo = friends[i].photo;
				bestMatch.friendDifference = totalDifference;
			  }
			}
		  }
	  
		  friends.push(userData);
		  res.json(bestMatch);
	  
    });
 }