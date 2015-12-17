var angular = window.angular;
module.exports = function(app) {
  app.controller('ScenesController', ['$scope', '$http', 'sceneResource', function($scope, $http, sceneResource) {
    $scope.scenes = [];
    $scope.errors = [];
    $scope.newScene = {};
    var scenesResource = sceneResource('scenes');
    var currentScene = {};

    $scope.getAll = function() {
      scenesResource.create(scene, function(err, data) {
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

      $scope.scene = angular.copy($scope.msater);
      scene.content = tempScene.content;
      scene.editing = false;
    };
  }]);
};
