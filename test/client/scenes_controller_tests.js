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

    describe('REST request functions', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_, $rootScope) {
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
      $ControllerConstructor('ScenesController', {$scope: $scope});
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectations();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should be able to add an array of scenes with a getAll', function() {
      $httpBackend.expectGET('/api/scenes').respond(200, [{_id: 1, title: 'test scene'}]);
      $scope.getAll();
      $httpBackend.flush();
      expect($scope.scenes[0].title).toBe('test scene');
    });

    it('should be able to create a new scene', function() {
      $httpBackend.expectPOST('/api/scenes', {title: 'test scene'}).respond(200, {title: 'a different scene'});
      expect($scope.scenes.length).toBe(0);
      expect($scope.newScene).toEqual($scope.defaults);
      $scope.newScene.title = 'test scene';
      $scope.create($scope.newScene);
      $httpBackend.flush();
      expect($scope.scenes[0].title).toBe('a different scene');
      expect($scope.newScene).toEqual($scope.defaults);
    });
  });
});


