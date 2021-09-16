const mongoose=require("mongoose");
const assignmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    shortDescription:{
        type: String,
        required:true,
        minlength:100,
        maxlength:250
    },
    longDescription:{
        type: String,
        required:true,
        minlength:200,
        maxlength:500
    },
    price:{
        type: Number,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    photo:{
        type: PictureInPictureWindow,
        required:true
    }    
});

const Assignment= mongoose.model("assignment",assignmentSchema);
module.exports= Assignment;