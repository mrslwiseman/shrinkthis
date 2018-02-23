"use strict";
const   mongoose = require('mongoose')
,       getNextSequence = require('./controllers/getNextSequence')
,       Counter = require('./models/Counter')
,       Link = require('./models/Link')
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
]

const seed = async function () {
    // const dbName = 'shrinkthis';
    // const url = `mongodb://localhost:27017/${dbName}`;
    try {
        await Link.remove();
        for ( let seed of seeds ){
        // easier if we count number of seeds first and increment rather than making multiple calls to db
            const nextLinkId = await getNextSequence(Counter); 
            await Link.create({ url: seed.url, id: nextLinkId })
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = seed;