'use strict';

var config = require(__dirname + '/config')
var express = require('express');
var app = express();
var scenesRouter = require(__dirname + '/routes/scenes-routes');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

app.use('/api', scenesRouter);

app.listen(port, function() {
  console.log('Listening at ' + port + '.');
  console.log('NODE_ENV: ' + process.env.NODE_ENV);
});
