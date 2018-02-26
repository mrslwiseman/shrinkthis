const express = require('express');
const router = express.Router({ mergeParams: true });

module.exports = (req,res) => {
    // let error = new Error('Your query is missing a URL parameter.')
    // error.code = 400;
    // throw error;
    res.send('/')
}