const mongoose = require( 'mongoose' );

const CommissionSchema = new mongoose.Schema({
    discord_username: {
        type: String,
        required: [true, 'Username obligatorio para el contacto con el cliente']
    },
    proyect_name: {
        type: String,
        required: [true, 'El nombre de la comision es obligatoria'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Todos los datos recolectados para la realizacion del proyecto']
    },
    plataform: {
        type: String,
        required: [true, 'Es obligatoria la plataforma o tipo de comision que se esta solicitando por le cliente']
    },
    urlImage: {
        type: String
    },
    budget: {
        type: Number,
        min: [0, 'Inversion del cliente para tomar en cuenta'],
        default: 0
    },
    time: {
        type: String,
        min: ['Tiempo aproximado del cliente para que su comision pueda estar termida']
    },
    state: {
        type: String,
        enum: [ 'cola', 'atendiendo', 'concluido', 'pendiente' ],
        default: 'cola'
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    }
},{
    timestamps: true,
    versionKey: false
});

const CommissionModel = mongoose.model(
    'commissions',
    CommissionSchema
);

module.exports = CommissionModel;


