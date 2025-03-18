const PlataformModel = require("../models/plataform.model");

async function dbInsertPlataform( newPlataform ) {
    return await PlataformModel.create( newPlataform );
}

async function dbGetPlataforms() {
    return await PlataformModel.find({}).populate(['userId'])
}

async function dbGetPlataformById( id ) {
    return await PlataformModel.findById( id );
}

async function dbDeletePlataformById( id ) {
    return await PlataformModel.findByIdAndDelete( id );
}

async function dbUpdatePlataformById( id, newPlataform ) {
    return await PlataformModel.findByIdAndUpdate( id, newPlataform, 
        { 
            new: true 
        });
}




module.exports = {
    dbInsertPlataform,
    dbGetPlataforms,
    dbGetPlataformById,
    dbDeletePlataformById,
    dbUpdatePlataformById
};