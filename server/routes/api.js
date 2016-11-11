// Dependencies
var express = require('express');
var router = express.Router();

// Models

var Book = require('../models/Book');
var User = require('../models/User');
var Cart = require('../models/Cart');

// Routes

Book.methods(['get', 'put', 'post', 'delete']);
Book.register(router, '/books');

User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

Cart.methods(['get', 'put', 'post', 'delete']);
Cart.register(router, '/carts');

// Return router
module.exports = router;
