const mongoose = require('mongoose');

let Todo = mongoose.model('ToDo', {
    text: {
        type: String,
        required: [true, 'Text is required'],
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false 
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};