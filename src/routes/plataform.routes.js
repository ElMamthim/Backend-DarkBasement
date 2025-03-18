const express = require( 'express' );
const { getPlataforms, createPlataform, getPlataformById, deletePlataformById, updatePlataformByIdPatch } = require('../controllers/plataform.controller');
const validateId = require('../middlewares/validate-id.middleware');
const {validateAuthUser} = require('../middlewares/validate-auth-user-middlewares')

const router = express.Router();

router.get( '/', getPlataforms );

router.post( '/', validateAuthUser, createPlataform );

router.get( '/:id', validateId, validateAuthUser, getPlataformById );

router.delete( '/:id', validateId, validateAuthUser, deletePlataformById );

router.patch( '/:id', validateId, validateAuthUser, updatePlataformByIdPatch );


module.exports = router;