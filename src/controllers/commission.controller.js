const verifyProperties = require("../helpers/verify-properties.helper");
const { dbInsertCommission, dbGetCommissions, dbGetCommissionById, dbDeleteCommissionById, dbUpdateCommissionById } = require("../services/commission.service");


async function getCommissions( req, res ) {

    try {
        const data = await dbGetCommissions();

        res.json({
            ok: true,
            data: data
        });        
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al tratar de obtener los datos registrados de las comisiones'
        });
    }

}

async function createCommission( req, res ) {
    const inputData = req.body;

    try {
        const data = await dbInsertCommission( inputData );

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

async function getCommissionById( req, res ) {
    const id = req.params.id;

    try {
        const data = await dbGetCommissionById( id );

        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error ); 
        res.json({                  
            ok: false,
            msg: 'Ha ocurrido un error al tratar de obtener los datos de la comision, revisa los datos colocados'
        });
    }
    
} 

async function deleteCommissionById( req, res ) {
    const id = req.params.id;
    
    try {
        const data = await dbDeleteCommissionById( id );

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

async function updateCommissionByIdPatch( req, res ) {
    const id = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await dbUpdateCommissionById( id, inputData );

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
    getCommissions,
    createCommission,
    getCommissionById,
    deleteCommissionById,
    updateCommissionByIdPatch
};