const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');
const Mall = require('./Mall');

const developerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    malls: [Mall.schema]
});

// set middleware for creating admin password
developerSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})

// compare password to hashed
developerSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const Developer = mongoose.model('Developer', developerSchema);
module.exports = Developer;