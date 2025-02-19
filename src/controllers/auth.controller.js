const {encrytedPassword, verifyEncriptedPassword} = require("../helpers/bcrypt.helper");
const { dbGetUserByUsername } = require("../services/user.service");
const {generateToken, verifyToken} = require("../helpers/jwt.helper");

async function loginUser( req, res ) {
    const inputData = req.body;

    try {
        const userFound = await dbGetUserByUsername( inputData.username );
        
        if( ! userFound ) {
            return res.json({
                ok: false,
                msg: 'El usuario no existe. Por favor registrese'
            });
        }
        const isValidPassword = verifyEncriptedPassword( inputData.password, userFound.password );

        if( ! isValidPassword ) {
            return res.json({
                ok: false,
                msg: 'Contraseña invalida'
            });
        }
    
        const payload = {
            name: userFound.name,
            username: userFound.username,
            role: userFound.role,
            id: userFound._id
        };

        const token = generateToken (payload);

        res.json({
            ok: true,
            token
    });

    } catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al entrar a la aplicacion'
        });
    }

}

const reNewToken = async ( req, res ) => {
    const payload = req.authUser;

    try {
        const userFound = await dbGetUserByUsername( payload.username );

        if( ! userFound ) {
            return res.json({
                ok: false,
                msg: 'El usuario no esta registrado. Por favor registrese!'
            });
        } 

        const token = generateToken({
            name: dataFound.name,
            username: dataFound.username,
            role: dataFound.role,
            id: dataFound._id
        });

        res.json({
            ok: true,
            token
        });
    } 
    catch ( error ) {
        res.json({
            ok: false,
            msg: 'Token no valido',
            error: error
        });
    }

}

module.exports = {
    loginUser,
    reNewToken
}