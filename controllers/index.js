const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', (req, res) => {
    res.json({
        success: false,
        msg: 'Invalid Request. Your query was empty. Please refer to docs.'
    })})

module.exports = router;