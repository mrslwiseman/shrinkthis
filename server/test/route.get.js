process.env.NODE_ENV = 'test';
process.env.MONGO_URI = 'mongodb://localhost:27017/shrinkthis';

let mongoose = require("mongoose");

// have to do this to get testing to work
const Link = require('../models/Link');
// let Link = mongoose.model('link') || mongoose.model('Link', linkSchema);

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;
chai.use(chaiHttp);

// this is a sllooow test waiting for response from redirect
describe('GET /1 redirects', () => {
    const testUrl = 'https://www.youtube.com'

    after((next) => {
        // after test clear db
        Link.remove({});
        Link.create(testUrl, 1)
        next();
    })

    it(`GET /1 should return text/html`, (done) => {
        chai.request(server)
            .get('/1')
            .end((err, res) => {
                assert(res.type, 'text/html')
                done();
            })
    })

    it(`GET /1 should return text/html`, (done) => {
        chai.request(server)
            .get('/1')
            .end((err, res) => {
                assert(res.type, 'text/html')
                done();
            })
    })
})

