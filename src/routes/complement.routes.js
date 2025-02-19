const express = require( 'express' );
const { getComplements, createComplement, getComplementById, deleteComplementById, updateComplementByIdPatch } = require('../controllers/complement.controller');

const router = express.Router();

router.get( '/', getComplements );

router.post( '/', createComplement );

router.get( '/:id', getComplementById );

router.delete( '/:id', deleteComplementById );

router.patch( '/:id', updateComplementByIdPatch );


module.exports = router;