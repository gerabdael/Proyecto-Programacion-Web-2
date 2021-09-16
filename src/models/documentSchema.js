const mongoose=require("mongoose");
const documentSchema = new mongoose.Schema({
    archive:{
        type: String,
        required:true
    }
});

const Document= mongoose.model("document",documentSchema);
module.exports= Document;