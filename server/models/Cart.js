var restful = require('node-restful');
var mongoose = restful.mongoose;

// Create the BookSchema.
var CartSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  isbn: {
    type: String,
    default: '',
    trim: true,
    required: 'Isbn cannot be blank'
  },
  author: {
    type: String,
    default: '',
    trim: true,
    required: 'Author cannot be blank'
  },
  category: {
    type: String,
    default: '',
    trim: true,
    required: 'Category cannot be blank'
  },
  url: {
    type: String,
    default: '',
    trim: true,
    required: 'Url cannot be blank'
  }
});

// Export the model.
module.exports = restful.model('cart', CartSchema);
