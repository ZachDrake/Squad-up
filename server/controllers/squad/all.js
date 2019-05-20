module.exports = async (req, res) => {
    try {
        let squad = await res.locals.Squad.find();
        res.send(squad)
    } catch (err) {
        if (err) {
            res.send(err);
        }
    }
}