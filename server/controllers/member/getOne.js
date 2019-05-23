const { Member } = require('../../models');

module.exports = async ({ params: { name } }, res) => {
<<<<<<< Updated upstream
    try {

        let member = await Member.findOne({name: name});

        res.send(member);
    } catch (err) {
        if (err) {
            res.send(err);
=======
    console.log(name);
    if (name) {
        try {
            let member = await Member.findOne({ name: name });
            res.send(member);
        } catch (err) {
            if (err) {
                res.send(err);
            }
>>>>>>> Stashed changes
        }
    } else {
        res.send('please provide a name');
    }
}