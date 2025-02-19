const express = require( 'express' );
const { getCommissions, createCommission, getCommissionById, deleteCommissionById, updateCommissionByIdPatch } = require('../controllers/commission.controller');

const router = express.Router();

router.get( '/', getCommissions );

router.post( '/', createCommission );

router.get( '/:id', getCommissionById );

router.delete( '/:id', deleteCommissionById );

router.patch( '/:id', updateCommissionByIdPatch );


module.exports = router;