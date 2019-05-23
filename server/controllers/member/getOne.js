const { Member } = require('../../models');

module.exports = async ({ params: { name } }, res) => {
    try {
        console.log(name)
        let member = await Member.findOne(name);
        res.send(member);
    } catch (err) {
        if (err) {
            res.send(err);
        }
    }
}