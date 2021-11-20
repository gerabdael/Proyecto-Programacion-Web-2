const mongoose=require("mongoose");
const LevelSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    photo:{
        type: String
    },
    video:{
        type: String
    }
});

const Level= mongoose.model("level",LevelSchema);
module.exports= Level;