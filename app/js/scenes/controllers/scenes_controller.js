'use strict';

var angular = window.angular;
module.exports = function(app) {
  app.controller('ScenesController', ['$scope', '$http', 'sceneResource', function($scope, $http, sceneResource) {
    $scope.scenes = [];
    $scope.errors = [];
    $scope.newScene = {};
    var scenesResource = sceneResource('scenes');

    $scope.currentScene = {};
    $scope.currentId = '';
    $scope.content = [];
    $scope.choices = [{sceneId: '567713815154713c0b5f0129', displayText: "Play!"}];


    $scope.getContent = function(id) {
      $http.get('/api/scenes/' + id)
      .then(function(res) {
        var scene = res.data[0];
        $scope.currentScene = scene;
        $scope.content = scene.content;
        $scope.choices = scene.choices;
      }, function(err) {
        console.log(err.data);
      });
    }

    $scope.getAll = function() {
      scenesResource.getAll(function(err, data) {
        if (err) return err;

        $scope.scenes = data;
      });
    };

    $scope.create = function(scene) {
      scenesResource.create(scene, function(err, data) {
        if (err) return err;
        $scope.scenes.push(data)
        $scope.newScene = {};
      });
    };

    $scope.update = function(scene) {
      scene.editing = false;

      scenesResource.update(scene, function(err, data) {
        if (err) $scope.errors.push('No updates allowed.');
      });
    };

    $scope.remove = function(scene) {
      $scope.scenes.splice($scope.scenes.indexOf(scene), 1);

      scenesResource.remove(scene, function(err, data) {
        if (err) $scope.errors.push('Deletion failed');
      });
    };

    $scope.save = function(scene) {
      scene.editing = true;

      $scope.currentScene[scene._id] = {content: scene.content};
    };

    $scope.reset = function(scene) {
      var tempScene = $scope.currentScene[scene._id];

      $scope.scene = angular.copy($scope.master);
      scene.content = tempScene.content;
      scene.editing = false;
    };
  }]);
};
