var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

/*
 * // Pulled from https://gist.github.com/mongolab-org/9959376#file-mongoose-connection-options-js
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
  // mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/scene_dev');
  mongoose.connect(process.env.MONGOLAB_URI);

}

if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost/scene_test');
}

if (process.env.NODE_ENV === 'production') {
  var mongodbUri = process.env.MONGOLAB_URI;
  var mongooseUri = uriUtil.formatMongoose(mongodbUri);

  mongoose.connect(mongooseUri, options);
}
