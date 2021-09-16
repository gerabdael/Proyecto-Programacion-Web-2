const level = require("../models/levelschema");

const { assignement_create } = require("./assigmenetController"); 

  

exports.level_create =(req,res)=>{ 

    const {body} =req; 

    let newlevel = new level(body); 

  

    newlevel.save() 

    .then((newDBObject)=> console.log("Success!",newDBObject)) 

    .catch((err)=>console.log("oops!",err)); 

    res.send(newlevel); 

}; 

  

exports.level_getbyidassignement = async(req, res) => { 

    const { id } = req.params; 

    const data = await level.findByid(id); 

     

    res.send(data); 

}; 