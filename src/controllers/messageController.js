const message = require("../models/messageSchema"); 

  

exports.message_create =(req,res)=>{ 

    const {body} =req; 

    let newmessage = new message(body); 

  

    newmessage.save() 

    .then((newDBObject)=> console.log("Success!",newDBObject)) 

    .catch((err)=>console.log("oops!",err)); 

    res.send(newmessage); 

}; 

  

exports.message_getbyiduser = async(req, res) => { 

    const { id } = req.params; 

    const data = await message.findByid(id); 

     

    res.send(data); 

}; 

  

exports.message_getbysubject = async(req, res) => { 

    const { id } = req.params; 

    const data = await message.findBySubject(id); 

     

    res.send(data); 

}; 