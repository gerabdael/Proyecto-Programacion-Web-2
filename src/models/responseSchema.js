const mongoose=require("mongoose");
const ResponseSchema = new mongoose.Schema({
    response:{
        type: String,
        required:true,
        maxlength:140
    },
    date:{
        type: date,
        required:true,
    }
});

const Response= mongoose.model("response",ResponseSchema);
module.exports= Response;