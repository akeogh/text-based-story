'use strict';

require('angular/angular');
var angular = window.angular;

var sceneApp = angular.module('SceneApp', []);
require('./services/services.js')(sceneApp);
require('./scenes/scenes')(sceneApp);
