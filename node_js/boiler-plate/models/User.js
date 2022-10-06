const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


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
    password: {
        type: String,
        minlength: 5
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

userSchema.pre('save', function(next)
{
    var user = this;

    if(user.isModified('password')){

    // password protect bcrypt
    bcrypt.genSalt(saltRounds, function(err, salt) 
    {
        if(err) return next(err)

        bcrypt.hash(user.password, salt, function(err, hash) 
        {
            if (err) return next(err)
            user.password = hash;
            next()
        })
    })
    } else {
        next()
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }