const document = require("../models/documentSchema");

exports.user_create =(req,res)=>{
    const {body} =req;
    let newdocument = new document(body);

    newdocument.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newdocument);
};