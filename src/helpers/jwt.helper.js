const jwt = require('jsonwebtoken');

function generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SEED, {expiresIn: '12h'})
}

function verifyToken (token) {
    return jwt.verify(token, process.env.JWT_SEED)
}
module.exports ={
    generateToken,
    verifyToken
};