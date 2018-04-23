var express = require("express");
var router = express.Router();
var friends = require('../data/friends');

router.get("/", function(req, res) {
    return res.json(friends);
});
    
router.post("/", function(req, res) {
   
    var newfriend = req.body;
  
    console.log(newfriend);
  
    friends.push(newfriend);
  
    res.json(newfriend);
});

module.exports = router;