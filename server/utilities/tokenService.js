const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

const createToken = user => jwt.sign({user, exp: Math.floor(Date.now() / 1000) + (60 * 60)}, SECRET);

const validToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, function (err, user) {
      return err ? reject(err) : resolve(user);      
    })
  })
} 

module.exports = {
  validToken, 
  createToken
}