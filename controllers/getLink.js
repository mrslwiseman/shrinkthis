const express = require('express');
const router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const Link = require('../models/Link');

router.get('/', (req, res) => {
    (async function () {
        try {
            // TODO: ok for small scale
            const shortLinkId = Number(req.params.id);
            const search = await Link.findOne({ id: shortLinkId });
            if (search === null) throw Error('Link Id was invalid or not found.');
            // TODO: incremement the link hit counter array with a timestamp
            // Over 'n' out. 
            res.redirect(search.url);
        } catch (e) {
            console.log(e);
            res.json({
                success: false,
                msg: e.message
            })
        }
    })();
})

module.exports = router;