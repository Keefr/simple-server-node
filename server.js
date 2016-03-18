var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Keef, This is your FIRST IOT Device Deployment!KEEP BUILDING AND DEPLOYING!');
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port ', port);

});
