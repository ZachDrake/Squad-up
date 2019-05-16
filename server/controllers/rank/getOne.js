const { Rank } = require('./../../models');

module.exports = async ({ params: { id } }, res) => {
    console.log('hit');
    try {
        let rank = await Rank.findById(id);
        res.send(rank);
    } catch (err) {
        if (err) throw err
    }
}