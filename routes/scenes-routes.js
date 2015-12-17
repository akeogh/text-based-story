'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var Scene = require(__dirname + '/../models/scene');
var handleError = require(__dirname + '/../lib/handle-server-error');

var scenesRouter = module.exports = exports = express.Router();

scenesRouter.get('/scenes', function(req, res) {
  Scene.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

scenesRouter.get('/scenes/:id', function(req, res) {
  Scene.find({_id: req.params.id}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  })
})

scenesRouter.post('/scenes', bodyParser.json(), function(req, res) {
  var newScene = new Scene(req.body);
  newScene.save(function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

scenesRouter.put('/scenes/:id', bodyParser.json(), function(req, res) {
  var sceneData = req.body;
  delete sceneData._id;
  Scene.update({_id: req.params.id}, sceneData, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'Scene updated.'});
  });
});

scenesRouter.delete('/scenes/:id', function(req, res) {
  Scene.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'Scene removed.'});
  });
});
