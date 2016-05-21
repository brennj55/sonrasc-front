var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/build/index.html');
});

app.get('*', function(req,res) {
  res.sendfile(__dirname + '/build/index.html');
});

app.listen(8080, function () {
  console.log('Waiting for requests on port 8080.');
});
