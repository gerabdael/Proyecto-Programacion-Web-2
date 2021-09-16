const message = require("../models/userSchema");

exports.message_create =(req,res)=>{
    const {body} =req;
    let newmessage = new message(body);

    newmessage.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newmessage);
};