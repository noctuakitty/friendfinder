var path = require("path");
var friendsList = require('../data/friends.js');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "/../data/friends.js"));
    });

    app.post("/api/friends", function (req, res) {
        var theMatch = {
            name: "",
            photo: "",
            scoreDifference: 1000
        };
        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs[parseInt(userScores[j]) - parseInt(friends[i].scores[k])];

                if (totalDifference <= theMatch.scoreDifference) {
                    theMatch.name = friends[i].name;
                    theMatch.photo = friends[i].photo;
                    theMatch.scoreDifference = totalDifference;
                    console.log('Friend name = ' + friends[i].name);
                    console.log('Friend image = ' + friends[i].photo);
                }
            }
        }

        friendsList.push(userData);
        res.json(theMatch);
    });
};