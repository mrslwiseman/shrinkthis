exports.urlIsValid = (link) => {
    const re = /^((?:https?|ftp):\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    return re.test(link);
}

exports.urlHasWhiteSpace = (link) => {
    return (/ /gi).test(link);
}

exports.removeWhiteSpace = (link) => {
    const cleanLink = link.replace(/ /gi, ''); // remove any white space
    return cleanLink;
}

exports.urlHasProtocol = (link) => {
    const re = /^(http:\/\/)|^(https:\/\/)/gi; // check starts with http(s)://
    return re.test(link);
}

exports.addUrlProtocol = (link) => {
    return 'http://' + link;
}