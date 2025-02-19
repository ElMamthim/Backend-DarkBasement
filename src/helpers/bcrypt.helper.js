const bcrypt = require('bcrypt')

function encrytedPassword (pass) {
    const salt = bcrypt.genSaltSync();
    console.log('salt: ', salt)
    
    const hashPassword = bcrypt.hashSync(pass, salt);
    
    return hashPassword
}

function verifyEncriptedPassword (pass, hashPass) {
    return bcrypt.compareSync(pass, hashPass)
}

module.exports = {
    encrytedPassword,
    verifyEncriptedPassword
}