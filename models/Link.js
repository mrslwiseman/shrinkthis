const   mongoose = require('mongoose')
,       Schema = mongoose.Schema;

const linkSchema = new Schema({
    url: String,
    id: Number
})

const Link = mongoose.model('link', linkSchema);

module.exports = Link;