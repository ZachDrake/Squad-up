const { Member } = require('../../models');

module.exports = async ({ params: {name, memberName} }, res) => {
    try {
        let squad = await res.locals.Squad.findOne({name: name});
        console.log(squad);
        console.log(squad._id);
        try {
            let member = await Member.findOne({name: memberName});
            console.log(member);
            member.squad.push(squad.name);
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