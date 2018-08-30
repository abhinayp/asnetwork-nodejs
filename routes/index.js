var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/asnetwork';

  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log('Unable to connect')
    }
    else {
      console.log('Connection establised');

      var posts = db.collection('posts');

      posts.find({}).toArray(function(err, result) {
        if (err) {
          res.send(err);
        }
        else {
          console.log(result);
          res.render('index', {posts: result})
        }
      });

      db.close();
    }
  });

  // res.render('index', { title: 'Express' });
});

module.exports = router;
