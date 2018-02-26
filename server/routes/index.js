const express = require('express');
const router = express.Router({ mergeParams: true });
const {catchErrors} = require('../handlers/errors')
const link = require('../controllers/link');
const index = require('../controllers/index');
const path = require('path');
router.get('/favicon.ico', (req, res) => res.status(204).end())

router.use(express.static(path.resolve(__dirname, '../../client/build')));

// routes
router.use('/api/new', catchErrors(link.setLink)) // @query url=http://www.someUrl.com
router.use('/api/:id', catchErrors(link.getLink)) // @number
router.use('/api/', catchErrors(index)) // @number

// All remaining requests return the front end
router.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});


module.exports = router;
