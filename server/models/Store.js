const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
 
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Mall',
    required: true
  }
});

const Store = mongoose.model('Store',storeSchema);

module.exports = Store;
