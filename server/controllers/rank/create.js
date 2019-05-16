module.exports = async (req, res) => {
    try {
        let rank = await res.locals.Rank.create(req.body);
        res.send(rank);
    } catch (err) {
        if (err) throw err;
    }
}