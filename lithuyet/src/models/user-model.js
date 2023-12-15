//create schema

const {Schema, default: mongoose} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: String,
});


//creat model
const User = mongoose.model("users", userSchema);

module.exports = {User};