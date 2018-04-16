var mongoose = require('mongoose');

var exampleSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        minLength: 2
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 10
    },
    
}, {timestamps: true });

mongoose.model('Example', exampleSchema);