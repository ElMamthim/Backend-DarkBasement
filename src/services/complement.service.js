const ComplementModel = require("../models/complement.model");

async function dbInsertComplement( newComplement ) {
    return await ComplementModel.create( newComplement );
}

async function dbGetComplements() {
    return await ComplementModel.find({}).populate(['category','userId'])
}

async function dbGetComplementById( id ) {
    return await ComplementModel.findById( id );
}

async function dbDeleteComplementById( id ) {
    return await ComplementModel.findByIdAndDelete( id );
}

async function dbUpdateComplementById( id, newComplement ) {
    return await ComplementModel.findByIdAndUpdate( id, newComplement, 
        { 
            new: true 
        });
}




module.exports = {
    dbInsertComplement,
    dbGetComplements,
    dbGetComplementById,
    dbDeleteComplementById,
    dbUpdateComplementById
};