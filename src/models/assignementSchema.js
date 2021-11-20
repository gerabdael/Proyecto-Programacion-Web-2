const mongoose=require("mongoose");
const assignmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    shortdescription:{
        type: String,
        required:true,
        minlength:2,
        maxlength:250
    },
    longdescription:{
        type: String,
        required:true,
        minlength:2,
        maxlength:500
    },
    price:{
        type: Number,
        required:true
    },
    category:{
        type: String
    },
    photo:{
        type: String
    }    
});

const Assignment= mongoose.model("assignment",assignmentSchema);
module.exports= Assignment;