const express = require( 'express' );
const { getCommissions, createCommission, getCommissionById, deleteCommissionById, updateCommissionByIdPatch } = require('../controllers/commission.controller');
const validateId = require('../middlewares/validate-id.middleware');
const {validateAuthUser} = require('../middlewares/validate-auth-user-middlewares')

const router = express.Router();

router.get( '/', getCommissions );

router.post( '/', validateAuthUser, createCommission );

router.get( '/:id', validateId, validateAuthUser, getCommissionById );

router.delete( '/:id', validateId, validateAuthUser, deleteCommissionById );

router.patch( '/:id', validateId, validateAuthUser, updateCommissionByIdPatch );


module.exports = router;