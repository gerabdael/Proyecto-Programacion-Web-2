const response = require("../models/responseSchema"); 

  

exports.response_create =(req,res)=>{ 

    const {body} =req; 

    let newresponse = new response (body); 

  

    newresponse.save() 

    .then((newDBObject)=> console.log("Success!",newDBObject)) 

    .catch((err)=>console.log("oops!",err)); 

    res.send(newresponse); 

}; 

  

exports.points_getbyidcomment = async(req, res) => { 

    const { id } = req.params; 

    const data = await response.findByid(id); 

    res.send(data); 

}; 