const express = require( 'express' );
const dbConection = require('./config/mongo.config.js');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT??3001

dbConection();           

app.use( express.json() );
app.use (cors());

app.use( '/api/user', require( './routes/user.routes.js' ));
app.use( '/api/complement', require( './routes/complement.routes.js' ));
app.use( '/api/auth', require( './routes/auth.routes.js'));
app.use( '/api/commission', require( './routes/commission.routes.js'));
app.use( '/api/plataform', require( './routes/plataform.routes.js'));

module.exports = app