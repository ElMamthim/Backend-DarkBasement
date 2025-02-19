const CommissionModel = require("../models/commission.model");

async function dbInsertCommission( newCommission ) {
    return await CommissionModel.create( newCommission );
}

async function dbGetCommissions() {
    return await CommissionModel.find({}).populate(['category','userId'])
}

async function dbGetCommissionById( id ) {
    return await CommissionModel.findById( id );
}

async function dbDeleteCommissionById( id ) {
    return await CommissionModel.findByIdAndDelete( id );
}

async function dbUpdateCommissionById( id, newCommission ) {
    return await CommissionModel.findByIdAndUpdate( id, newCommission, 
        { 
            new: true 
        });
}




module.exports = {
    dbInsertCommission,
    dbGetCommissions,
    dbGetCommissionById,
    dbDeleteCommissionById,
    dbUpdateCommissionById
};