const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 8080
const getLink = require('./controllers/getLink')
const setLink = require('./controllers/setLink')
const index = require('./controllers/index')
const seed = require('./seed')

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

app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/favicon.ico', (req,res) => res.status(204).end())
app.use('/new', setLink) // @query url=http://www.someUrl.com
app.use('/:id', getLink) // @number
app.use('/', index) // @number

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
});