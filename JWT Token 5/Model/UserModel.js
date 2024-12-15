const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
}, {timestamps:true})

const userModel = mongoose.model("User_jwt5", UserSchema);


module.exports = userModel;