const mongoose = require( 'mongoose' );

async function dbConection() {
    try {
        await mongoose.connect( 'mongodb://localhost:27017/DarkBasementStudio', {} );
        console.log( 'Se inicio la base de datos correctamente' );
    } 
    catch ( error ) {
        console.error( error );
        console.log( 'Ocurrio un error al iniciar la base de datos' );
    }
    
}

module.exports = dbConection;