module.exports = async (req, res) => {
    try {
        let squad = await res.locals.Squad.create(req.body);
        res.send(squad);
    } catch (err) {
        if (err) {
            res.send(err);
        }
    }
}

