module.exports = async (req, res) => {
    try {
        let rank = await res.locals.Rank.find();
        res.send(rank)
    } catch (err) {
        if (err) throw err;
    }
}