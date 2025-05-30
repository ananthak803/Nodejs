const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
        requried:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true}
);

const user = mongoose.model("user",userSchema);

module.exports = user;