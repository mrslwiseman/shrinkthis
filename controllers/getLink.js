const express = require('express')
    , router = express.Router({ mergeParams: true })
    , mongoose = require('mongoose')
    , Link = require('../models/Link');

router.get('/', (req, res) => {
    (async function () {
        // const dbName = 'shrinkthis';
        // const url = `mongodb://localhost:27017/${dbName}`;
        try {
            // TODO: check is a valid
            // await mongoose.connect(url);
            // TODO: ok for small scale, not good if we need letters
            const shortLinkId = Number(req.params.id);
            const search = await Link.findOne({ id: shortLinkId });
            if (search === null) throw Error('Link Id was invalid or not found.');

            // TODO: incremement the link hit counter array with a timestamp

            // we're done. 
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



