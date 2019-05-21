const { Squad } = require('./../../models');

module.exports = async ({ params: { id } }, res) => {
    try {
        let squads = await Squad.findById(id);
        res.send(squads);
    } catch (err) {
        if (err) {
            res.send(err);
        }
    }
}