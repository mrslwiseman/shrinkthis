// errors in routes
// so theres no need for try/catch in each controller
exports.catchErrors = (fn) => {
    // route callback gets passed in.
    console.log('⚠️   CatchErrors Error Handler');
    return function (req, res, next) {
        // error will be caught if thrown in route callback
        return fn(req, res, next).catch(err => next(err));
    };
}

// dev final error handling
exports.development = (err, req, res, next) => {
    console.log(err.stack)
    res.send(err.stack)
}

// production final error handling
// hide stack message from user.
exports.production = (err, req, res, next) => {
    res.json({
        success: false,
        msg: err.message
})
}