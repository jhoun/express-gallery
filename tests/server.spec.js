const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
const should = chai.should;

describe('POST /project', function() {
  it('respond with redirecting to /project', function(done) {
    request(app)
      .post('/portfolio')
      .type('form')
      .send({
        author: 'sunday',
        title: 'cash register',
        link: 'http://google.com',
        description: 'made own calculator'
      })
      .end(function (err, res) {
        if (err) {
          throw new Error(err);
        }
        console.log(res.header);
        expect(res.header.location).to.equal('/portfolio')
        done()
      });
  })

  // it('if object is empty then send correct validation error', function(done){
  //   request(app)
  //   .post('/products')
  //   .type('form')
  //   .send({})
  //   .end (function (err, res) {
  //     if (err) {
  //       throw new Error(err);
  //     }
  //     console.log('res.header: ', res.header);
  //     expect(res.header.location).to.equal('/products/error')
  //     done()
  //   });
  // })

});