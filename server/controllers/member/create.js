const bcrypt = require("bcryptjs");
const Member = require("./../../models/Member");
const config = require('config');
const jwt = require('jsonwebtoken');

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
                        .then(member => {

                            jwt.sign(
                                {
                                    id: member.id,
                                    name: member.name,
                                    email: member.email
                                },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 * 3 },
                                (err, token) => {
                                    console.log(token); 
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        member: {
                                            id: member.id,
                                            name: member.name,
                                            email: member.email
                                        }
                                    })
                                }

                            )


                        })
                })
            })
        })





    // try {
    //     let member = await res.locals.Member.create(req.body);
    //     res.send(member);
    // } catch (err) {
    //     if (err) {
    //         res.send(err);
    //     }
    // }
}