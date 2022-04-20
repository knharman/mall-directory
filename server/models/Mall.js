const mongoose = require('mongoose');
const {Schema} = mongoose;
const storeSchema = require('./Store')

const mallSchema = new Schema({
    mallName: {
        type: String,
        required: true,
        trim: true
    },
    stores: [storeSchema], 
    style: {
        type: String, 
        required: true, 
        trim: true
    }, 
    location: {
        type: String, 
        required: true, 
        trim: true
    }
});

const Mall = mongoose.model('Mall', mallSchema);
module.exports = Mall;