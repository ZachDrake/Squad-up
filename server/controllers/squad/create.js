module.exports = async (req, res) => {
    try {
        let squad = await res.locals.Squad.create(req.body);
        res.send(squad);
    } catch (err) {
        if (err) throw err;
    }
}

// module.exports = (req, res) => {
//     res.locals.Squad.create(req.body).then(squad => {
//         res.send(squad);
//     }).catch(err => {
//         if (err) throw err;
//     })
// }