const mongoose = require('mongoose');

const ProblemsSchema = mongoose.Schema({
    date: {
        type: String
    },
    name: {
        type: String,
        required: true,
        
    },
    phone: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    }
});

const Problems = mongoose.model('Problems', ProblemsSchema)

module.exports = Problems;