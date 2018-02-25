exports.isValidUrl = (link) => {
    const re = /^(http:\/\/)|^(https:\/\/)/gi; // check starts with http(s)://
    return link.match(re)
}

exports.formatURL = (link) => {
    const cleanLink = 'http://' + link.replace(/ /gi, ''); // remove any white space
    return cleanLink;
}
