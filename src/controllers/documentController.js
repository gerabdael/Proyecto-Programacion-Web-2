const document = require("../models/documentSchema");

exports.document_create =(req,res)=>{
    const {body} =req;
    let newdocument = new document(body);

    newdocument.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newdocument);
};
exports.document_getbyid=async(req,res)=>{
    const {id}= req.params;
    const data = await document.findById(id)
    res.send(data);
}
