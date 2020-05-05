var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(express.static("public"));

var html = require("./app/routing/htmlRoutes");
html(app);
var api = require("./app/routing/apiRoutes");
api(app);

var PORT = process.env.PORT || 2222;

app.listen(PORT, function() {
    console.log("APP LISTENING ON PORT: " + PORT);
});