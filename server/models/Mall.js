const mongoose = require('mongoose');
const {Schema} = mongoose;
const Store = require('./Store')

const mallSchema = new Schema({
    mallName: {
        type: String,
        required: true,
        trim: true
    },
    stores: {
        type: [Store.schema], 
        default: undefined
    }, 
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