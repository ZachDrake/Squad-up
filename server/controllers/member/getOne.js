const { Member } = require('../../models');

module.exports = async ({ params: { name } }, res) => {
    try {

        let member = await Member.findOne({name: name});

        res.send(member);
    } catch (err) {
        if (err) {
            res.send(err);
        }
    }
}