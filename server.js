var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ==================================


var friends = [];


// ==================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.use("/", htmlRoutes);
app.use("/api/friends", apiRoutes);




// =============


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});