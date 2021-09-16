const history = require("../models/historySchema");

exports.user_create =(req,res)=>{
    const {body} =req;
    let newhistory = new history(body);

    newhistory.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newhistory);
};