const   express = require('express')
,       MongoClient = require('mongodb').MongoClient
,       router = express.Router({mergeParams: true})

router.get('/', (req, res) => {
    res.json({
        success: false,
        msg: 'Invalid Request. Your query was empty. Please refer to docs.'
    })})

module.exports = router;