const jwt = require('jsonwebtoken');

function generateToken(payload) {
    return jwt.sign(payload, '$2b$10$sa8jgu6EjfatxW0Apw8qE', {expiresIn: '1h'})
}

function verifyToken (token) {
    jwt.verify(token, '$2b$10$sa8jgu6EjfatxW0Apw8qE')
}
module.exports ={
    generateToken,
    verifyToken
};