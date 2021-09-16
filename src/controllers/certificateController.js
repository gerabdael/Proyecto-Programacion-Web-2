const certficate = require("../models/certificateSchema");

exports.certificate_create =(req,res)=>{
    const {body} =req;
    let newcertificate = new certficate(body);

    newcertificate.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newcertificate);
};