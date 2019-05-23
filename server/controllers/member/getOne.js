const { Member } = require('../../models');

module.exports = async ({ params: { name } }, res) => {


    console.log(name);
    if (name) {
        try {
            let member = await Member.findOne({ name: name }).populate('squads');
            res.send(member);
        } catch (err) {
            if (err) {
                res.send(err);
            }

        }
    } else {
        res.send('please provide a name');
    }
}