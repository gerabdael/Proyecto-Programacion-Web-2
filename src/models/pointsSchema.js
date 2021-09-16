const mongoose=require("mongoose");
const PointSchema = new mongoose.Schema({
    score:{
        type: String,
        required:true,
        unique:true
    }
});

const Point= mongoose.model("points",PointSchema);
module.exports= Point;