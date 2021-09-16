const mongoose=require("mongoose");
const messageSchema = new mongoose.Schema({
    subject:{
        type: String,
        required:true
    },
    messages:{
        type: String,
        required:true
    },
    date:{
        type: date,
        required:true,
    }
});

const Message= mongoose.model("message",messageSchema);
module.exports= Message;