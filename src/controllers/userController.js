const user = require("../models/userSchema");

exports.user_create =(req,res)=>{
    const {body} =req;
    let newuser = new user(body);

    newuser.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newuser);
};
