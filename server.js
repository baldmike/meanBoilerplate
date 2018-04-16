const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app)

app.listen(port, () => {
    console.log('The Whole Wide World is listening on Port '+port);
  });
