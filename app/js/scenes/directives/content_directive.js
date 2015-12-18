module.exports = exports = function(app) {
  app.directive('contentDirective', function(){
    return {
      restrict: 'AEC',
      replace: 'true',
      templateUrl: '/templates/content_template.html',
      scope: {
        content: '='
      }
    }
  });
};
