const { Squad } = require('./../../models');

module.exports = async ({ params: { name } }, res) => {
    try {
        console.log(name);
        let squads = await Squad.findOne({name: name});
        res.send(squads);

    } catch (err) {
        if (err) {
            res.send(err);
        }
    }
}