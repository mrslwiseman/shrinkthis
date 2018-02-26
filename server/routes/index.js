const express = require('express');
const router = express.Router({ mergeParams: true });
const {catchErrors} = require('../handlers/errors')
const link = require('../controllers/link');
const index = require('../controllers/index');
const path = require('path');


// routes

router.use('/api/new', catchErrors(link.setLink)) 
router.use('/api/:id', catchErrors(link.getLink)) 
router.use('/api/', catchErrors(index)) 

router.use('/', express.static(path.resolve(__dirname, '../../client/build')));
// All remaining requests return the front end
router.use('/', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

module.exports = router;
