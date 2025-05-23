const mongoose = require( 'mongoose' );

const validateId = (req, res, next) => {
    const id = req.params.id;

    if ( ! mongoose.Types.ObjectId.isValid( id ) )
        return res.status( 400 ).json({ 
            ok: false, 
            msg: 'El id NO válido' 
        });

    next();
};


module.exports = validateId;