const mongoose=require("mongoose");
const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    }
});

const category= mongoose.model("category",CategorySchema);
module.exports= category;