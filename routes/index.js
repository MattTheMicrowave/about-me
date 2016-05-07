var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Zo's Bio",
    pic: "https://avatars1.githubusercontent.com/u/16580180?v=3&amp;s=460",
    bio: "I'm a party goer and like to jump off buildings.  Everything is nice and dandy",
skillstitle: "My Skills",
hobbiestitle: "My Hobbies",
    skills: ['html','css','javascript','java'],
    hobbies: ['boxing', 'reading', 'classical latin']
  });
});

module.exports = router;
