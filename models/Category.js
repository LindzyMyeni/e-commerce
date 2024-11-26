const mongoose = require('mongoose');

// Define the schema for categories
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now } // Automatically set the date when created
});

// Create and export the model
module.exports = mongoose.model('Category', categorySchema);
