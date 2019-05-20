module.exports = async (req, res) => {
    try {
        let member = await res.locals.Member.create(req.body);
        res.send(member);
    } catch (err) {
        if (err) {
            res.send(err);
        }
    }
}