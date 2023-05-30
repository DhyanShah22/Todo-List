const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema ({
    title: {
        type: String, 
        required: true
    },
    Priority: {
        type: String,
        required: true
    },
    DueDays: {
        type: Number,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('todo',todoSchema)