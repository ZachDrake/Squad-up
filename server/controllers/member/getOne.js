const { Member } = require('../../models');

module.exports = async ({ params: { id } }, res) => {
    console.log('hit');
    try {
        let member = await Member.findById(id);
        res.send(member);
    } catch (err) {
        if (err) throw err
    }
}