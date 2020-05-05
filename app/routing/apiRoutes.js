var path = require("path");
var friendsList = require('../data/friends.js');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
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
        console.log("userscore: " + userScores);

        var totalDifference = 0;

        for (var i = 0; i < friendsList.length; i++) {
            totalDifference = 0;

            for (var j = 0; j < friendsList[i].scores.length; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsList[i].scores[j]));

                console.log("totalDifference: " + totalDifference);
            } if (totalDifference <= theMatch.scoreDifference) {
                theMatch.name = friendsList[i].name;
                theMatch.photo = friendsList[i].photo;
                theMatch.scoreDifference = totalDifference;
                console.log('Friend name = ' + friendsList[i].name);
                console.log('Friend image = ' + friendsList[i].photo);
            }
            console.log("scoreDifference: " + theMatch.scoreDifference);
        }

        friendsList.push(userData);
        res.json(theMatch);
    });
};