const express = require('express');
const router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const Link = require('../models/Link');
const {getNextSequence} = require('../models/Counter');
const Counter = require('../models/Counter');
const {isValidUrl, formatURL} = require('../helpers/index')

exports.getLink = async (req, res) => {
    const link = await Link.find(req.params.id)
    if (!link) throw Error('Link Id was invalid or not found.');
    // TODO: incremement the link hit counter array with a timestamp
    res.redirect(link);
}

exports.setLink = async (req, res) => {
    if (!req.query.url) throw Error('Your query is missing a URL parameter. ')
    // rudimentary url checking / cleaning    
    // not sure if this should be in model or controller
    const link = !isValidUrl(req.query.url) && formatURL(req.query.url) || req.query.url
    const nextLinkId = await getNextSequence();
    await Link.create(link, nextLinkId);
    res.json({
        success: true,
        short: `http://${req.headers.host}/${nextLinkId}`,
    })
}