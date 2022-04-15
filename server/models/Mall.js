const mongoose = require('mongoose');
const Store = require('./Store');
const {Schema} = mongoose;
// const bcrypt = require('bcrypt');

const mallSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    stores: [Store]
});

const Mall = mongoose.model('Mall', mallSchema);
module.exports = Mall;