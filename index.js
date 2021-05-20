var express = require('express');
var app = express();
var multer = require('multer');
const path = require('path');

var upload = multer({ dest: 'newUploads/' });

const port = 3000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/upload.html'));
});

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);