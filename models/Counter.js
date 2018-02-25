const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counterSchema = new Schema({
    id: String,
    sequence_value: Number
})

const Counter = mongoose.model('counter', counterSchema);

exports.setNextSequence = async () => {
    try {
        await Counter.remove();
        await Counter.create({
            id: 'linkid',
            sequence_value: 0
        });
   
    } catch (e) {
        console.log(e)
        throw Error('Error during reset sequence')
    }
}

exports.getNextSequence = async () => {
    try {
        const seq = await Counter.findOneAndUpdate(
            { id: 'linkid' },
            { $inc: { sequence_value: 1 } },
            { new: true }
        )
        return seq.sequence_value;
    } catch (e) {
        throw e
    }
}

