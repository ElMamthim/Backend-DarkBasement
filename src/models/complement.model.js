const mongoose = require( 'mongoose' );

const ComplementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del complemento es obligatorio']
    },
    date: {
        type: Number
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
        type: String
    },
    urlImage: {
        type: String
    },
    state: {
        type: Boolean,
        default: true
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


