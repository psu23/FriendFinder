var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var newMemberScores = req.body.scores;
        var scoresArr = [];
        var memberTicker = 0;
        var bestMatch = 0;

        for (var i=0; i<friends.length; i++) {

            var totalDiff = 0;

            for (var x=0; x<newMemberScores.length; x++) {
                totalDiff = totalDiff + Math.abs(parseInt(friends[i].scores[x] - parseInt(newMemberScores[x])));
            }

            scoresArr.push(totalDiff);

        }

        for (var i=0; i<scoresArr.length; i++) {
            
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        var matchedUser = friends[bestMatch];
        res.json(matchedUser);

        friends.push(req.body);

    });

};

