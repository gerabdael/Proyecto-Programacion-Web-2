const mongoose=require("mongoose");
const UserSchema = new mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type: String

    },
    email:{
        type: String,
        email:true
    },
    usertype:{
        type: String
    },
});

const User= mongoose.model("user",UserSchema);
module.exports= User;