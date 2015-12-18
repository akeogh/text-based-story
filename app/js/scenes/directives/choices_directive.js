module.exports = exports = function(app) {
  app.directive('choicesDirective', function(){
    return {
      restrict: 'AE',
      replace: 'true',
      template: '/templates/choices_template',
      scope: {
        content: @
      }
    }
  });
};
