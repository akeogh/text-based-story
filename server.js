'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/scene_dev');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

app.listen(port, function() {
  console.log('Listening at ' + port + '.');
});
