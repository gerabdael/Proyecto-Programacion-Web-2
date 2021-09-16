const mongoose=require("mongoose");
const HistorySchema = new mongoose.Schema({
    date:{
        type: date,
        required:true,
    }
});

const History= mongoose.model("history",HistorySchema);
module.exports= History;