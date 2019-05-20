const { Squad } = require('../../models');

module.exports = async ({ params: { id }, body }, res) => {
    try {
        let squad = await Squad.findByIdAndUpdate(id, body, {new: true});
        res.send(squad);
    } catch (err) {
        if (err) throw err
    }
}