const express = require( 'express' );
const dbConection = require('./config/mongo.config.js');
const app = express();

dbConection();           

app.use( express.json() );

app.use( '/api/user', require( './routes/user.routes.js' ));
app.use( '/api/complement', require( './routes/complement.routes.js' ));
app.use( '/api/auth', require( './routes/auth.routes.js'));
app.use( '/api/commission', require( './routes/commission.routes.js'));

app.listen( 3000, function() {
    console.log( 'Servidor escuchando en el puerto 3000' );
});