const express = require('express')
    , router = express.Router({ mergeParams: true })
    , getNextSequence = require('./getNextSequence')
    , mongoose = require('mongoose')
    , Link = require('../models/Link')
    , Counter = require('../models/Counter')

router.get('/', (req, res) => {
    (async function () {
        // const dbName = 'shrinkthis';
        // const url = `mongodb://localhost:27017/${dbName}`;
        try {
            // Check that there is query and query has url parameter
            if (!req.query || !req.query.url) throw Error('Your query is missing a URL parameter. ')

            const prevLink = req.query.url;
            // await mongoose.connect(url);
            // get next available sequence number
            const nextLinkId = await getNextSequence(Counter)
            await Link.create({ url: prevLink, id: nextLinkId })

            
            res.json({
                success: true,
                short: `http://www.${req.headers.host}/${nextLinkId}`,
            })
        } catch (e) {
            console.log(e);
            res.json({
                success: false,
                msg: e.message
            })
        }
    })();
    });

module.exports = router;