const { dbGetUserByUsername } = require("../services/user.service");


const validateUserExists = async (req, res, next) => {
    const inputData = req.body;

    try {
        const dataFound = await dbGetUserByUsername( inputData.username );
        if ( dataFound ) 
            return res.status( 404 ).json({ 
                ok: false, 
                msg: 'El usuario ya existe' 
            });
        req.dataFound = dataFound;
        next();
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ 
            ok: false, 
            msg: 'Error al buscar el usuario'
        });
    }
};


module.exports = validateUserExists;