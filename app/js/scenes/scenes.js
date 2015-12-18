'use strict';

module.exports = function(app) {
  require('./controllers/scenes_controller')(app);
  require('./directives/choices_directive')(app);
  require('./directives/content_directive')(app);
};
