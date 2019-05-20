const { Squad } = require('../../models');

module.exports = async ({ params: { id } }, res) => {
    try {
        let squad = await Squad.findByIdAndDelete(id);
        res.send(squad);
    } catch (err) {
        if (err) {
            res.send(err);
        }
    }
}