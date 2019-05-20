const { Rank } = require('../../models');

module.exports = async ({ params: { id }, body }, res) => {
    console.log("hit")
    try {
        let rank = await Rank.findByIdAndUpdate(id, body, {new: true});
        res.send(rank);
    } catch (err) {
        if (err) throw err
    }
}