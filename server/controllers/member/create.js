const bcrypt = require("bcryptjs");
const Member = require("./../../models/Member");
const { createToken } = require('./../../utilities/tokenService');

module.exports = async (req, res) => {

    const { name, email, password } = req.body;

    Member.findOne({ email })
        .then(member => {
            if (member) return res.status(400).json({ msg: "User Already Exists" });

            const newMember = new Member({
                name,
                email,
                password
            });

            //Create SALT & HASH
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(newMember.password, salt, (err, hash) => {
                    if (err) throw err;
                    newMember.password = hash;
                    newMember.save()
                })
            })
        })
}