const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // delete space if true;
        unique: 1 // unique email
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    // ex) admin role 
    role: {
        type: Number,
        default: 0 // default role = 0
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }

})

const User = mongoose.model('User', userSchema)

module.exports = { User }