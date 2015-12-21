module.exports = exports = function(app){
  app.directive('footerDirective', function(){
    return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: '/templates/footer_template.html',
      scope: {

      }
    }
  });
};
