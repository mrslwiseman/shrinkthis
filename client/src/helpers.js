exports.urlHasProtocol = (link) => {
    const re = /^(http:\/\/)|^(https:\/\/)/gi; // check starts with http(s)://
    return re.test(link)
}

exports.urlIsValid = (link) => {
    const re = /^((?:https?|ftp):\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    const result = re.test(link);
    return result
}

