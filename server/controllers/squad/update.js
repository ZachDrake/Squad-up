const { Squad } = require('../../models');

module.exports = async ({ params: {name, squadName} }, res) => {
    try {
        let member = await res.locals.Member.findOne({ name });
        try {
            let squad = await Squad.findOne({name: squadName}).populate('members');
            squad.members.push(member._id);
            member.squads.push(squad._id);
            squad.save();
            member.save();
            res.send(squad);
        } catch (err) {
            if (err) throw err;
        }
    } catch (err){
        if (err) throw err;
    }
}