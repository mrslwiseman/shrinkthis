const express = require('express');
const router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const Link = require('../models/Link');
const {getNextSequence} = require('../models/Counter');
const Counter = require('../models/Counter');
const {urlIsValid, urlHasWhiteSpace, removeWhiteSpace, urlHasProtocol} = require('../helpers/index')

exports.getLink = async (req, res) => {
    const link = await Link.find(req.params.id)
    if (!link) throw Error('Link Id was invalid or not found.');
    // TODO: incremement the link hit counter array with a timestamp
    res.redirect(link);
}

exports.setLink = async (req, res) => {
    console.log('setLink route')
    if (!req.query.url) throw Error('Your query is missing a URL parameter. ')
    const {url} = req.query
    let link = url;

    if(!urlIsValid(link)){
        // if is missing the protocol http://
        if(!urlHasProtocol(req.query.url)){
            link = 'http://' + link; // add it
        }
        // if has whitespace
        if(urlHasWhiteSpace(link)){
            link = removeWhiteSpace(link); // remove it
        }

        if(!urlIsValid(link)){
            throw Error('Please enter a valid url.')
        }
    }

    // check its valid
        // if its not reject
    const nextLinkId = await getNextSequence();
    await Link.create(link, nextLinkId);
    res.json({
        success: true,
        short: `http://${req.headers.host}/${nextLinkId}`,
    })
}