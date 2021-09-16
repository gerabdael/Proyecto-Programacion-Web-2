const category = require("../models/categorySchema");

exports.category_create =(req,res)=>{
    const {body} =req;
    let newcategory = new category(body);

    newcategory.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newcategory);
};