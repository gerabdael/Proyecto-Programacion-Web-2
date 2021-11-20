const User = require("../models/userSchema");

exports.user_create =async (req,res)=>{
    const {body} =req;

        
    let newuser = new User(body);

    await newuser.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newuser);

};

exports.user_getbyid=async(req,res)=>{
    const {id}= req.params;
    const data = await User.findById(id)
    res.send(data);
}

exports.user_delete = async(req,res)=>{
    const {id}= req.params;
   await User.deleteOne({_id:id});
     res.send({message:"Usuario Eliminado"});
}