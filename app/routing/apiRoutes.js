var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

app.post("/api/friends", function(req, res) {
   
    var newfriend = req.body;
  
    console.log(newfriend);
  
    friends.push(newfriend);
  
    res.json(newfriend);
});