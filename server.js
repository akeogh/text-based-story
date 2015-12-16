'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

app.listen(port, function() {
  console.log('Listening at ' + port + '.');
});
