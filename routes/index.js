var express = require('express');
var router = express.Router();
var posts = require('./../models/posts');

/* GET home page. */
router.get('/', function(req, res, next) {

  posts.getAll(function(result) {
    if (Array.isArray(result))
      res.render('index', {posts: result});
    else
      res.render('index', {posts: []});
  });

});

module.exports = router;
