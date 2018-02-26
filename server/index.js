const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const seed = require('./seed');
const routes = require('./routes/index');
const errorHandler = require('./handlers/errors');

if (process.env.NODE_ENV !== 'production') {
    console.log('✅  ' + app.get('env') + ' environment.')
    require('dotenv').config();
}

mongoose
    .connect(process.env.MONGO_URI)
    .then(
        () => { 
            console.log('✅  Connected to DB.') 
            mongoose.Promise = global.Promise;
        },
        err => console.log('🚫  Error connecting to DB:\n' + err)
    );


app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/', routes);

if (app.get('env') === 'development') {
    app.use(errorHandler.development);
} else {
    app.use(errorHandler.production);
}

app.set('port', process.env.PORT || 8080)

const server = app.listen(app.get('port'), () => {
    console.log(`Server running → PORT ${server.address().port}`);
});

module.exports = server;