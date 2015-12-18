'use strict';

require(__dirname + '/../../app/js/entry');
require('angular-mocks');

describe('scenes controller', function() {
  var $httpBackend,
  var $ControllerConstructor,
  var $scope;

  beforeEach(angular.mock.module('SceneDev'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var controller = $ControllerConstructor('SceneDev', {$scope: $scope});
    expect(typeof $scope).toBe('object');
    expect(typeof controller).toBe('object');
    expect(Array.isArray($scope.scenes)).toBe(true);
  })
});
