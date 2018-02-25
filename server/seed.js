"use strict";
const mongoose = require('mongoose');
const {setNextSequence, getNextSequence} = require('./models/Counter');
const Link = require('./models/Link');

const seeds = [
    {
        url: "http://www.cats.com"
    },
    {
        url: "http://www.youtube.com"
    },
    {
        url: "http://www.dogs.com"
    },
    {
        url: "http://www.whatever.com"
    }
];

const seed = async function () {
    try {
        await Link.remove();
        await setNextSequence();
        for ( let seed of seeds ){
            const nextLinkId = await getNextSequence(); 
            await Link.create(seed.url, nextLinkId)
        }
    } catch (e) {
        console.log('🚫  Error whilst seeding: ' + e);
    }
}

module.exports = seed;