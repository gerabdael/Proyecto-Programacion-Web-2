const comment = require("../models/commentSchema");

exports.comment_create =(req,res)=>{
    const {body} =req;
    let newcomment = new comment(body);

    newcomment.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newcomment);
};
exports.comment_get =async(req,res)=>{
    const data = await comment.find();
    res.send(data);
};