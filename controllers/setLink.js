const express = require('express');
const router = express.Router({ mergeParams: true });
const getNextSequence = require('./getNextSequence');
const mongoose = require('mongoose');
const Link = require('../models/Link');
const Counter = require('../models/Counter');

router.get('/', (req, res) => {
    console.log('get link route');
    
    // rudimentary url checking / cleaning
    // TODO: what if httpp:// added?
    function checkLink(link){
        const startsWithHttp = /^(http:\/\/)|^(https:\/\/)/gi; // check starts with http(s)://
        const cleanLink = link.replace(/ /gi, ''); // remove any white space
        return link.match(startsWithHttp) 
        ? cleanLink 
        : 'http://' + cleanLink;
    }

    (async function () {

        try {
            // Check that there is query and query has url parameter
            if (!req.query || !req.query.url) throw Error('Your query is missing a URL parameter. ')

            const link = checkLink(req.query.url);

            const nextLinkId = await getNextSequence(Counter);

            await Link.create({ url: link, id: nextLinkId });
            
            res.json({
                success: true,
                short: `http://${req.headers.host}/${nextLinkId}`,
            })
        } catch(e) {
            console.log(e);
            res.json({
                success: false,
                msg: e.message
            })
        }
    })();
    });

module.exports = router;