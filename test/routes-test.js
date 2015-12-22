var chai = require('chai')
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect

process.env.NODE_ENV = 'test';
require(__dirname + '/../server');
var mongoose = require('mongoose');
var Scene = require(__dirname + '/../models/scene');

describe('scene routes', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should be able to create a scene', function(done) {
    var sceneData = {title: 'test scene'};
    chai.request('localhost:3000')
      .post('/api/scenes')
      .send(sceneData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.title).to.eql('test scene');
        expect(res.body).to.have.property('_id');
        done();
      });
  });

  it('should be able to get all the scenes', function(done) {
    chai.request('localhost:3000')
      .get('/api/scenes')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(Array.isArray(res.body)).to.eql(true);
        done();
      });
  });

  describe('needs a scene', function() {
    beforeEach(function(done) {
      (new Scene({title: 'test scene'})).save(function(err, data) {
        expect(err).to.eql(null);
        this.scene = data;
        done();
      }.bind(this));
    });

    it('should be able to modify a scene', function(done) {
      chai.request('localhost:3000')
        .put('/api/scenes/' + this.scene._id)
        .send({title: 'a different scene title'})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('Scene updated.');
          done();
        });
    });

    it('should be able to delete a scene', function(done) {
      chai.request('localhost:3000')
        .delete('/api/scenes/' + this.scene._id)
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('Scene removed.');
          done();
        });
    });
  });
});
