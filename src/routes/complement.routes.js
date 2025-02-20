const express = require( 'express' );
const { getComplements, createComplement, getComplementById, deleteComplementById, updateComplementByIdPatch } = require('../controllers/complement.controller');
const validateId = require('../middlewares/validate-id.middleware');
const {validateAuthUser} = require('../middlewares/validate-auth-user-middlewares')

const router = express.Router();

router.get( '/', getComplements );

router.post( '/', validateAuthUser, createComplement );

router.get( '/:id', validateId, validateAuthUser, getComplementById );

router.delete( '/:id', validateId, validateAuthUser, deleteComplementById );

router.patch( '/:id', validateId, validateAuthUser, updateComplementByIdPatch );


module.exports = router;