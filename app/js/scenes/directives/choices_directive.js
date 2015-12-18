module.exports = exports = function(app) {
  app.directive('choicesDirective', function(){
    return {
      restrict: 'AEC',
      replace: 'true',
      template: '/templates/choices_template',
      scope: {
        content: '@'
      }
    }
  });
};
