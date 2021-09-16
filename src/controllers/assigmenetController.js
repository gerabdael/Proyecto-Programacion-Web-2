const assignement = require("../models/assignementSchema");

exports.assignement_create =(req,res)=>{
    const {body} =req;
    let newassignement = new assignement(body);

    newassignement.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newassignement);
};