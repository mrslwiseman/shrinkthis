const getNextSequence = async function (Counter) {
    let seq;
    try {
        seq = await Counter.findOneAndUpdate(
            { id: "linkid" },
            { $inc: { sequence_value: 1 } },
            { new: true }
        )
        return seq.sequence_value;
    } catch (e) {
        console.log(e)
        throw e;
    }
}

module.exports = getNextSequence;