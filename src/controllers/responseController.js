const response = require("../models/userSchema");

exports.response_create =(req,res)=>{
    const {body} =req;
    let newresponse = new response (body);

    newresponse.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newresponse);
};