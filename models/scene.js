var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sceneSchema = Schema({
  title: String,
  content: [String],
  choices: [{
    sceneId: String,
    displayText: String,
  }]
});

module.exports = exports = mongoose.model("Scene", sceneSchema);
