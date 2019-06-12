//Initiallising node modules
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

//setings
app.use(cors());
app.use(morgan('dev'));
app.set('port', process.env.PORT || 8080);

// Body Parser Middleware
app.use(bodyParser.json());

//Routes
app.use(require('./src/routes/maestro'));


//server listening

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});