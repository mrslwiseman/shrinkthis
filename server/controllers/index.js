const express = require('express');
const router = express.Router({ mergeParams: true });

module.exports = (req,res) => {
    console.log('index route');
    
    let error = new Error('Your query is missing a URL parameter.')
    error.code = 400;
    throw error;
}