module.exports = exports = function(app){
  app.directive('headerDirective', function(){
    return {
      restrict: 'AE'
      replace: 'true',
      templateUrl: '/templates/header_template.html',
      scope: {

      }
    }
  });
};
