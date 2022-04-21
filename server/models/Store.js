const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeSchema = new Schema({
  storeName: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: false,
    trim: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  }
});

// const Store = mongoose.model('Store',storeSchema);

module.exports = storeSchema;
