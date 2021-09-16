const mongoose=require("mongoose");
const LevelSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true,
        minlength:200,
        maxlength:500
    },
    photo:{
        type: String,
        required:true
    },
    video:{
        type: String,
        required:true
    }
});

const Level= mongoose.model("level",LevelSchema);
module.exports= Level;