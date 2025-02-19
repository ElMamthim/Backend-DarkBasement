const express = require( 'express' );

const { getUsers, createUser, getUserById, deleteUserById, updateUserById } = require('../controllers/user.controller');
const validateUserExists = require('../middlewares/validate-user-exists');
const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.get( '/', getUsers );

router.post( '/', validateUserExists, createUser );

router.get( '/:id', validateId ,getUserById );

router.delete( '/:id', validateId, deleteUserById );

router.patch( '/:id', validateId, updateUserById );


module.exports = router;