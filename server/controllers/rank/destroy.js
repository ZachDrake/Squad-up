const { Rank } = require('../../models');

module.exports = async ({ params: { id } }, res) => {
    try {
        let rank = await Rank.findByIdAndDelete(id);
        res.send(rank);
    } catch (err) {
        if (err) throw err
    }
}