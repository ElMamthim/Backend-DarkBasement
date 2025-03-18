const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del usuario es obligatorio']
    },
    username: {
        type: String,
        required: [true, 'El correo del usuario es obligatorio'],
        unique: true
    },
    discord_username: {
        type: String,
        lowercase: [true, 'El usuario de discord es obligatorio'],
        required: [true, 'El usuario de discord es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    age: {
        type: Number
    },
    role: {
        type: String,
        enum: [ 'User', 'Ceo', 'Moderator', 'Admin', 'Employee' ],
        default: 'User'
    }
},{
    timestamps: true,
    versionKey: false
});

const UserModel = mongoose.model(
    'users',
    UserSchema          
);

module.exports = UserModel;


