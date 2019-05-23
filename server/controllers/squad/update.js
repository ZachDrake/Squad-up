const { Squad } = require('../../models');

module.exports = async ({ params: {name, squadName} }, res) => {
    try {
        let member = await res.locals.Member.findOne({name: name});
        console.log(member._id);
        try {
            let squad = await Squad.findOne({name: squadName});
            console.log(squad);
            squad.members.push(member._id);
            squad.save();
            res.send(squad);
        } catch (err) {
            if (err) throw err;
        }
    } catch (err){
        if (err) throw err;
    }
    console.log(squadName, name);
}