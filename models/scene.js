'use strict';

var mongoose = require('mongoose');

var sceneSchema = new mongoose.Schema({
  title: String,
  content: [{
    sceneContent: String
  }],
  choices: [{
    sceneId: String,
    displayText: String
  }]
});

module.exports = exports = mongoose.model("Scene", sceneSchema);
