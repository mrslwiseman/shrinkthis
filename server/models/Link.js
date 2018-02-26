const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    url: String,
    id: String
})

// had to do this for testing.
const Link = mongoose.model('link', linkSchema)

exports.find = async (id) => {
    const search = await Link.findOne({ id });    
    return search ? search.url : null;
}

exports.create = async(url,id) => {
    await Link.create({ url,id })
}

exports.remove = async (query = {}) => {
    await Link.remove(query)
}

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
exports.Link = Link;
