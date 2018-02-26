

// exports.formatURL = (link) => {
//     const cleanLink = 'http://' + link.replace(/ /gi, ''); // remove any white space
//     return cleanLink;
// }

const assert = require('assert')
const { urlIsValid, urlHasProtocol, addUrlProtocol, urlHasWhiteSpace, removeWhiteSpace } = require('./index');

describe('urlIsValid()', () => {
    it('returns true for a validUrl', () => {
        const validUrl = 'http://www.youtube.com';
        const expect = true;
        const result = urlIsValid(validUrl);
        assert.equal(expect, result)
    })
    it('returns true for a validUrl', () => {
        const validUrl = 'http://youtube.com';
        const expect = true;
        const result = urlIsValid(validUrl);
        assert.equal(expect, result)
    })
    it('returns false for an invalid Url', () => {
        const validUrl = 'youtubedotcom';
        const expect = false;
        const result = urlIsValid(validUrl);
        assert.equal(expect, result)
    })
    it('returns false for an invalid Url', () => {
        const validUrl = 'http://www.youtubedotcom';
        const expect = false;
        const result = urlIsValid(validUrl);
        assert.equal(expect, result)
    })
    it('returns false for an invalid Url', () => {
        const validUrl = 'http://youtubedotcom';
        const expect = false;
        const result = urlIsValid(validUrl);
        assert.equal(expect, result)
    })
    it('returns false for an invalid Url', () => {
        const validUrl = 'www.youtubedotcom';
        const expect = false;
        const result = urlIsValid(validUrl);
        assert.equal(expect, result)
    })
   
})

describe('urlHasProtocol()', () => {
    it('returns true if url has protocol', () => {
        const test = 'http://www.youtube.com';
        const expect = true;
        const result = urlHasProtocol(test);
        assert.equal(expect, result)
    })
    it('returns false if url has protocol', () => {
        const test = 'www.youtube.com';
        const expect = false;
        const result = urlHasProtocol(test);
        assert.equal(expect, result)
    })
})

describe('addUrlProtocol()', () => {
    it('returns a url with a protocol', () => {
        const test = 'www.youtube.com';
        const expect = 'http://www.youtube.com';
        const result = addUrlProtocol(test);
        assert.equal(expect, result)
    })
})

describe('urlHasWhiteSpace()', () => {
    it('returns true when url does have whitespace', () => {
        const test = 'www.yout  ube.com';
        const expect = true;
        const result = urlHasWhiteSpace(test);
        assert.equal(expect, result)
    })
    it('returns false when url doesnt have whitespace', () => {
        const test = 'www.youtube.com';
        const expect = false;
        const result = urlHasWhiteSpace(test);
        assert.equal(expect, result)
    })
})

describe('removeWhiteSpace()', () => {
    it('removes white space from url', () => {
        const test = 'www.yout  ube.com';
        const expect = 'www.youtube.com';
        const result = removeWhiteSpace(test);
        assert.equal(expect, result)
    })
})