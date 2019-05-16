module.exports = async (req, res) => {
    try {
        let member = await res.locals.Member.find();
        res.send(member)
    } catch (err) {
        if (err) throw err;
    }
}