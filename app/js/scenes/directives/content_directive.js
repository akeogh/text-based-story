module.exports = exports = function(app) {
  app.directive('contentDirective', function(){
    return {
      restrict: 'AE',
      replace: 'true',
      template: '/templates/content_template',
      scope: {
        choices: @
      }
    }
  });
};
