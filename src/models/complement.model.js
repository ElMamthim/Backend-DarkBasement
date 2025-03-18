const mongoose = require( 'mongoose' );

const ComplementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del complemento es obligatorio'],
        unique: true
    },
    date: {
        type: String
    },
    version: {
        type: Number,
        min: [0.1, 'La version debe ser catalogada desde 0.1 en adelante'],
        default: 0.1
    },
    description: {
        type: String
    },
    plataform: {
        type: mongoose.Schema.ObjectId,
        ref: 'plataform'
    },
    urlImage: {
        type: String
    },
    state: {
        type: String,
        enum: [ 'Completo', 'Actualizado', 'Desactualizado', 'Beta', 'Alpha', 'Desarrollo' ],
        default: 'Desarrollo'
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    }
},{
    timestamps: true,
    versionKey: false
});

const ComplementModel = mongoose.model(
    'complements',
    ComplementSchema
);

module.exports = ComplementModel;


