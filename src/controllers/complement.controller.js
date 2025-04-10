const verifyProperties = require("../helpers/verify-properties.helper");
const { dbInsertComplement, dbGetComplements, dbGetComplementById, dbDeleteComplementById, dbUpdateComplementById } = require("../services/complement.service");


async function getComplements( req, res ) {

    try {
        const data = await dbGetComplements();

        res.json({
            ok: true,
            data: data
        });        
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al tratar de obtener los datos registrados del complemento'
        });
    }

}

async function createComplement( req, res ) {
    const inputData = req.body;

    try {
        const data = await dbInsertComplement( inputData );

        res.json({
            ok: true,
            data: data
        });    
    } 
    catch ( error ) {
        console.error( error );

        const errors = verifyProperties(error);

        res.json({                  
            ok: false,
            msg: 'Ocurrio un error al tratar de registrar tu peticion porfavor verifica los datos',
            errors: errors
        });
    }

}

async function getComplementById( req, res ) {
    const id = req.params.id;

    try {
        const data = await dbGetComplementById( id );

        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error ); 
        res.json({                  
            ok: false,
            msg: 'Ha ocurrido un error al tratar de obtener los datos del complemento, revisa los datos colocados'
        });
    }
    
} 

async function deleteComplementById( req, res ) {
    const id = req.params.id;
    
    try {
        const data = await dbDeleteComplementById( id );

        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'La peticion que tratas de eliminar no existeo o no es valido, porfavor revisalo la id colocada'
        });
    }

}

async function updateComplementByIdPatch( req, res ) {
    const id = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await dbUpdateComplementById( id, inputData );

        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'Ha ocurrido un error al tratar de actualizar los datos'
        });
    }

}

module.exports = {
    getComplements,
    createComplement,
    getComplementById,
    deleteComplementById,
    updateComplementByIdPatch
};