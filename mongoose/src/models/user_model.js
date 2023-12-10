//create schema
const {Schema, default: mongoose, model} = require('mongoose');
const userShema = new Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
});

//create model
const user = mongoose.model("users", userShema);

module.exports = {user};