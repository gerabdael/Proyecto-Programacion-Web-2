const level = require("../models/levelschema");

exports.level_create =(req,res)=>{
    const {body} =req;
    let newlevel = new level(body);

    newlevel.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newlevel);
};