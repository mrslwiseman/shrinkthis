const express = require('express')
, app = express()
, bodyParser = require('body-parser')
, mongoose = require('mongoose')
, port = process.env.PORT || 8080
, getLink = require('./controllers/getLink')
, setLink = require('./controllers/setLink')
, index = require('./controllers/index')
,  seed = require('./seed')

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
    console.log('Connected to DB')
});
mongoose.connection.on('error', (err) => {
    console.log(err)
});

    
seed();


app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/favicon.ico', (req,res) => res.status(204))
app.use('/new', setLink) // @query url=http://www.someUrl.com
app.use('/:id', getLink) // @number
app.use('/', index) // @number

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
});