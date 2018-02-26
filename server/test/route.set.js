process.env.NODE_ENV = 'test';
process.env.MONGO_URI = 'mongodb://localhost:27017/shrinkthis';

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;
let Link = require('../models/Link');

chai.use(chaiHttp);

describe('GET /new returns a short link', () => {
    after((done) => {
        // after test clear db
        Link.remove({});
        done();
    })
    it('should return a short link', (done) => {
        chai.request(server)
            .get('/new')
            .query({ url: 'http://www.long.com' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.a.property('short')
                done();
            })
    })
    it('rejects an invalid url', (done) => {
        chai.request(server)
            .get('/new')
            .query({ url: 'http://wwwasdfcom' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.a.property('success');
                assert.isFalse(res.body.success)
                expect(res.body.msg).equal('Please enter a valid url.');
                done();
            })
    })
})

