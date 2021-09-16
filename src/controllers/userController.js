const User = require("../models/userSchema");
const user = require("../models/userSchema");

exports.user_create =(req,res)=>{
    const {body} =req;
    if(req.body.username.length >0 && req.body.username.length <20){
        if(req.body.password.length>0 && req.body.password.length>10){

        
    let newuser = new user(body);

    newuser.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newuser);
        }else{
            console.log("Capacidad de password no permitida");
        }
    }
    else
    {
        console.log("Capacidad de username no permitida");
    }

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