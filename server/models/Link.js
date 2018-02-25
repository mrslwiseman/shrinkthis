const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    url: String,
    id: String
})

const Link = mongoose.model('link', linkSchema);

exports.find = async (id) => {
    const search = await Link.findOne({ id });    
    if(!search) {throw Error('URL not found')}
    return search.url;
}

exports.create = async(url,id) => {
    await Link.create({ url,id })
}

exports.remove = async (query = {}) => {
    await Link.remove(query)
}