var friends = require("../data/friends.js");

module.exports = function(app) {

    //the following is ran to determine best friend match
    app.get("/api/friends", function(req, res) {
        //print the friends list in json format
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        //save the scores of the new member
        var newMemberScores = req.body.scores;
        //define an array that will show the match score of each user
        //compared to the current user
        //the total differences in answers for each member (lower score=better match)
        var scoresArr = [];
        

        for (var i=0; i<friends.length; i++) {

            //define a variable that will measure how different answers are (lower difference=higher match likelihood)
            var totalDiff = 0;

            for (var x=0; x<newMemberScores.length; x++) {
                //find the absolute difference between each members answer to each question versus the new user's answer
                //for each question, add that difference to totalDiff
                //the friend with the lowest totalDiff will be the best match for the new user
                totalDiff = totalDiff + Math.abs(parseInt(friends[i].scores[x] - parseInt(newMemberScores[x])));
            }

            scoresArr.push(totalDiff);

        }

        //define a variable that will represent the index of the best match
        var bestMatch = 0;

        //cycle through each index of the scoresArr to find the lowest number 
        //(the best match that will be shown to the user)
        for (var i=0; i<scoresArr.length; i++) {
            
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        //define the best match
        var matchedUser = friends[bestMatch];
        //and send the result
        res.json(matchedUser);

        friends.push(req.body);

    });

};

