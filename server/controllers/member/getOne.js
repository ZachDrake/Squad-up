const { Member } = require('../../models');

module.exports = async ({ params: { id } }, res) => {
    try {
        let member = await Member.findById(id);
        res.send(member);
    } catch (err) {
        if (err) {
            res.send(err);
        }
    }
}