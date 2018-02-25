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
    console.log('⚠️   DEVELOPMENT error handler');
    console.log(err.stack)
    res.send(err.stack)
}
// production final error handling

exports.production = (err, req, res, next) => {
    console.log('⚠️   PRODUCTION error handler');
    // redirect to 404 page
    res.json({
        success: false,
        msg: err.message
})
}