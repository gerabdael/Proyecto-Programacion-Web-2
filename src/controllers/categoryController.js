const category = require("../models/categorySchema");

exports.category_create =(req,res)=>{
    const {body} =req;
    let newcategory = new category(body);

    newcategory.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newcategory);
};
exports.category_getbyid=async(req,res)=>{
    const {id}= req.params;
    const data = await category.findById(id)
    res.send(data);
};
exports.category_update =async (req,res)=>{
    const {id}= req.params;
    const{body}= req;
    const data = await category.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

