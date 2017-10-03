const mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: 1,
        trim: true
    }
});

module.exports = {User};