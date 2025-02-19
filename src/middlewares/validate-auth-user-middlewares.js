const { verifyToken } = require("../helpers/jwt.helper");

function validateAuthUser(req, res, next) {
    console.log('Middleware de Autenticacion')

    const token = req.header('X-Token');
    console.log(token)

    if (! token) {
        return res.json({
            ok: false,
            msg: 'Error al obtener el token'
        })
    }

    const payload = verifyToken(token);

    delete payload.iat;
    delete payload.exp;

    console.log(payload);


    next();
}

module.exports = {validateAuthUser}