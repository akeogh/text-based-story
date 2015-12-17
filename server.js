'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var scenesRouter = require(__dirname + '/routes/scenes-routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/scene_dev');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

app.use('/api', scenesRouter);

app.listen(port, function() {
  console.log('Listening at ' + port + '.');
});
