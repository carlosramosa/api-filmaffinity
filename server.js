// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const cheerio = require('cheerio');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Hola!!! Bienvenido a nuestra API!!!' });
});
var request = require("request");

require('./controller/info-pelicula')(app);

require('./controller/busqueda-pelicula')(app);

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
