const   mongoose = require('mongoose')
,       Schema = mongoose.Schema;

const counterSchema = new Schema({
    _id: String,
    sequence_value: Number
})

const Counter = mongoose.model('counter', counterSchema);

module.exports = Counter;