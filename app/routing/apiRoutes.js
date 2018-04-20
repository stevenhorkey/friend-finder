var express = require("express");
var router = express.Router();

router.get("/api/friends", function(req, res) {
    return res.json(friends);
});
    
router.post("/api/friends", function(req, res) {
   
    var newfriend = req.body;
  
    console.log(newfriend);
  
    friends.push(newfriend);
  
    res.json(newfriend);
});

module.exports = router;