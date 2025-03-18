const express = require( 'express' );

const { getUsers, createUser, getUserById, deleteUserById, updateUserById } = require('../controllers/user.controller');
const {validateUserExistsByUserName, validateUserDoesNotExistsById} = require('../middlewares/validate-user-exists');
const validateId = require('../middlewares/validate-id.middleware');
const {validateAuthUser} = require('../middlewares/validate-auth-user-middlewares')

const router = express.Router();

router.get( '/:id', [ validateId, validateUserDoesNotExistsById ], getUserById 
);

router.post( '/', validateUserExistsByUserName, validateAuthUser, createUser );

router.get( '/:id', validateId, validateAuthUser ,getUserById );

router.delete( '/:id', [ validateId, validateUserDoesNotExistsById ], deleteUserById );

router.patch( '/:id', [ validateId, validateUserDoesNotExistsById ], updateUserById  );


module.exports = router;