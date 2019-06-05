const { Member } = require('../../models');
const {createToken} = require('./../../utilities/tokenService');


function login({body: {email, password}}, res){
    Member.findOne({ email: email }).then(function (member) {
      let token = createToken(member);
      console.log(member); 
      res.cookie('token', token, {
        httpOnly: true, // only accessible from same origin
        // secure: true, // only accessible over https, this will be commented back in for when its deployed
        maxAge: 1000 * 60 * 60, // one hour cookie age,
        signed: true 
      });
      res.redirect('/');
    })
}

function logout(req,res){
  res.clearCookie('token');
  res.redirect('/');
}

module.exports = {
  login,
  logout
}