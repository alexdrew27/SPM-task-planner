const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    status: {
        type: String,
        required: true,
        enum: ['TODO', 'IN_PROGRESS', 'DONE'],
        default: 'TODO'
    },
    priority: {
        type: Number,
        required: true,
        min: 0,
        max: 2,
        default: 1
    },
    assignment: {
        type: String,
        required: false,
        default: undefined
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task }