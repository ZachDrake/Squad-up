const { Member, Squad } = require('../../models');


module.exports = async ({ params: {name, memberName} }, res) => {
    try {
        let squad = await Squad.findOne({ name }).populate('members');
        try {
            let member = await Member.findOne({name: memberName});
            member.squads.push(squad._id);
            squad.members.push(member._id);
            squad.save();
            member.save();
            res.send(member);
        } catch (err) {
            if (err) throw err;
        }
    } catch (err){
        if (err) throw err;
    }
    console.log(memberName, name);
}