var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello, This is one of many Iot Devices, I am pushing commands through the cloud!');
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port ', port);

});
