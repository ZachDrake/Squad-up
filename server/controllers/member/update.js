const { Member } = require('../../models');

module.exports = async ({ params: { id }, body }, res) => {
    try {
        let member = await Member.findByIdAndUpdate(id, body, {new: true});
        res.send(member);
    } catch (err) {
        if (err) throw err
    }
}