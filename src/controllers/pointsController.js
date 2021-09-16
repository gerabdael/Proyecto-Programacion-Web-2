const points = require("../models/userSchema");

exports.points_create =(req,res)=>{
    const {body} =req;
    let newpoints = new points(body);

    newpoints.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newpoints);
};