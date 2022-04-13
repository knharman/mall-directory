const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const mallSchema = new Schema({

});

const Mall = mongoose.model('Mall', mallSchema);
module.exports = Mall;