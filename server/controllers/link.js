const express = require('express');
const router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const Link = require('../models/Link');
const { getNextSequence } = require('../models/Counter');
const Counter = require('../models/Counter');
const { urlIsValid, urlHasWhiteSpace, removeWhiteSpace, urlHasProtocol } = require('../helpers/index');

exports.getLink = async (req, res) => {
    const link = await Link.find(req.params.id);
    if (!link) {
        let error = new Error('Link Id was invalid or not found.');
        error.code = 404;
        throw error;
    }
    // TODO: incremement the link hit counter array with a timestamp
    res.redirect(link);
}

exports.setLink = async (req, res) => {
    if (!req.query.url) {
        let error = new Error('Your query is missing a URL parameter.')
        error.code = 400;
        throw error;
    }
    const { url } = req.query;
    let link = url;

    if (!urlHasProtocol(req.query.url)) {
        link = 'http://' + link; // add it
    }
    if (!urlIsValid(link)) {
        // if is missing the protocol http://
        // if has whitespace
        if (urlHasWhiteSpace(link)) {
            link = removeWhiteSpace(link); // remove it
        }

        if (!urlIsValid(link)) {
            let error = new Error('Please enter a valid URL.')
            error.code = 400;
            throw error;
        }
    }
    const nextLinkId = await getNextSequence();
    await Link.create(link, nextLinkId);
    res.json({
        success: true,
        short: `http://${req.headers.host}/api/${nextLinkId}`,
    })
}