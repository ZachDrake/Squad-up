const { Member } = require('../../models');

module.exports = async ({ params: { id } }, res) => {
    try {
        let member = await Member.findByIdAndDelete(id);
        res.send(member);
    } catch (err) {
        if (err) throw err
    }
}