var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport	= require('passport');
var _ = require('lodash');
var authController = require('./controllers/AuthController');
var userController = require('./controllers/UserController');



// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(passport.initialize());
// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function() {

  // Load the models.
  app.models = require('./models/index');
  // Load the routes.
  app.use('/api', require('./routes/api'));

  console.log('Listening on port 3000...');
  app.listen(3000);
});
