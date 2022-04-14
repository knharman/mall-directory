const mongoose = require('mongoose');
const {Schema} = mongoose;
// const bcrypt = require('bcrypt');

const mallSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Mall = mongoose.model('Mall', mallSchema);
module.exports = Mall;