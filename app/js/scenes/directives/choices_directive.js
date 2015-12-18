module.exports = exports = function(app) {
  app.directive('choicesDirective', function(){
    return {
      restrict: 'AEC',
      replace: 'true',
      templateUrl: '/templates/choices_template.html',
      scope: {
        content: '@'
      }
    }
  });
};
