const mongoose=require("mongoose");
const CommentSchema = new mongoose.Schema({
    comment:{
        type: String,
        required:true,
        maxlength:140
    },
    date:{
        type: date,
        required:true,
    }
});

const Comments= mongoose.model("comments",CommentSchema);
module.exports= Comments;