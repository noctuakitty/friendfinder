var path = require("path");
var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
       res.sendFile(path.join(__dirname, "/../data/friends.js")); 
    });
}

