var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/javascript', express.static(__dirname + '/javascript'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(3000);