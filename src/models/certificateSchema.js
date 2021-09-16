const mongoose=require("mongoose");
const certificateSchema = new mongoose.Schema({
    curso:{
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
    date:{
        type: String,
        required:true,
    }
});

const Certificate= mongoose.model("certificate",certificateSchema);
module.exports= Certificate;