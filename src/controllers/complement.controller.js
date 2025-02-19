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
            msg: 'Ocurrio un error al tratar de ver todos los registros de las comisiones'
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
            msg: 'Ocurrio un error al tratar de registrar los datos',
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
            msg: 'No se pudo identificar el complemento que estas buscando por Id porfavor ingresa otro'
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
            msg: 'No se pudo identificar el complemento que estas tratando de eliminar por Id porfavor ingresa otro'
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
            msg: 'Ocurrio un error al actualizar unos detalles del complemento, porfavor revisalo'
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