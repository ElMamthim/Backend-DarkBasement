const express = require( 'express' );

const { getUsers, createUser, getUserById, deleteUserById, updateUserById } = require('../controllers/user.controller');
const validateUserExists = require('../middlewares/validate-user-exists');
const validateId = require('../middlewares/validate-id.middleware');
const {validateAuthUser} = require('../middlewares/validate-auth-user-middlewares')

const router = express.Router();

router.get( '/', validateAuthUser ,getUsers );

router.post( '/', validateUserExists, validateAuthUser, createUser );

router.get( '/:id', validateId, validateAuthUser ,getUserById );

router.delete( '/:id', validateId, validateAuthUser, deleteUserById );

router.patch( '/:id', validateId, validateAuthUser, updateUserById );


module.exports = router;