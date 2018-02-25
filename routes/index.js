const express = require('express');
const router = express.Router({ mergeParams: true });
const {catchErrors} = require('../handlers/errors')
const link = require('../controllers/link');
const index = require('../controllers/index');

router.get('/favicon.ico', (req, res) => res.status(204).end())

router.use('/new', catchErrors(link.setLink)) // @query url=http://www.someUrl.com
router.use('/:id', catchErrors(link.getLink)) // @number
router.use('/', index) // TODO: Point to a front end form

module.exports = router;
