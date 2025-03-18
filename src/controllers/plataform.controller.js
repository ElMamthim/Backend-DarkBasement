const verifyProperties = require("../helpers/verify-properties.helper");
const { dbInsertPlataform, dbGetPlataforms, dbGetPlataformById, dbDeletePlataformById, dbUpdatePlataformById } = require("../services/plataform.service");


async function getPlataforms( req, res ) {

    try {
        const data = await dbGetPlataforms();

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

async function createPlataform( req, res ) {
    const inputData = req.body;
    const userId = req.authUser.id;

    inputData.userId = userId;

    try {
        const data = await dbInsertPlataform( inputData );

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

async function getPlataformById( req, res ) {
    const id = req.params.id;

    try {
        const data = await dbGetPlataformById( id );

        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error ); 
        res.json({                  
            ok: false,
            msg: 'No se pudo identificar la plataforma que estas buscando por Id porfavor ingresa otro'
        });
    }
    
} 

async function deletePlataformById( req, res ) {
    const id = req.params.id;
    
    try {
        const data = await dbDeletePlataformById( id );

        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'No se pudo identificar la plataforma que estas tratando de eliminar por Id porfavor ingresa otro'
        });
    }

}

async function updatePlataformByIdPatch( req, res ) {
    const id = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await dbUpdatePlataformById( id, inputData );

        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'Ocurrio un error al actualizar unos detalles de la plataforma, porfavor revisalo'
        });
    }

}

module.exports = {
    getPlataforms,
    createPlataform,
    getPlataformById,
    deletePlataformById,
    updatePlataformByIdPatch
};