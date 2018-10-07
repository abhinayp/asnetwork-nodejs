var base = require('./../models/base');

var posts = (function() {

  var getAll = function(callback) {
    base.mongoClient(function(db, status) {

      if (status != 200) {
        callback(null, 500);
        return;
      }

      var posts = db.collection('posts');
      posts.find({}).toArray(function(err, result) {
        if (err) {
          console.log(err);
          callback(null, 500, err);
        }
        else {
          console.log(result);
          callback(result, 200);
        }
      });
    })
  };

  var createPost = function(user, status, callback) {
    base.mongoClient(function(db) {

      if (status != 200) {
        callback(null, 500, err);
        return;
      }

      var d = new Date();
      let posts = db.collection('posts');
      let post = {
        status: status,
        created_at: d,
        updated_at: d,
        user: user.email,
      }
      posts.insert(post, function(err, result) {
        if (err) {
          console.log(err);
          callback(null, 500, err);
        }
        else {
          console.log(result);
          callback(result);
        }
      });
    });
  };

  return {
    getAll: getAll,
    createPost: createPost,
  }
})();

module.exports = posts;
