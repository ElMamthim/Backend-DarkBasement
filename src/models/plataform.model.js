const mongoose = require( 'mongoose' );

const PlataformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del plataforma es obligatorio'],
        unique: true
    },
    description: {
        type: String
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    }
},{
    timestamps: true,
    versionKey: false
});

const PlataformModel = mongoose.model(
    'plataforms',
    PlataformSchema
);

module.exports = PlataformModel;