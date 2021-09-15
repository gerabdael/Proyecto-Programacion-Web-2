const mongoose=require("mongoose");
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        minlength:5,
        maxlength:20,
        unique:true,
    },
    password:{
        type: String,
        required:true,
        minlength:5,
        maxlength:20,
        unique:true,
    },
    names:{
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type: String,
        required:true,
        minlength:5,
        maxlength:20,
        unique:true,
        email:true,
    },
    usertype:{
        type: String,
        required:true,
    },
});

const User= mongoose.model("user",UserSchema);
module.exports= User;