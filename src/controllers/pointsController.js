const points = require("../models/pointsSchema"); 

  

exports.points_create =(req,res)=>{ 

    const {body} =req; 

    let newpoints = new points(body); 

  

    newpoints.save() 

    .then((newDBObject)=> console.log("Success!",newDBObject)) 

    .catch((err)=>console.log("oops!",err)); 

    res.send(newpoints); 

}; 

  

exports.points_getbyidassignement = async(req, res) => { 

    const { id } = req.params; 

    const data = await message.findByid(id); 

     

    res.send(data); 

}; 

  

exports.points_update = async (req, res) => { 

    const { id } = req.params; 

    const { body } = req; 

  

    const data = await User.findAndUpdate({ _id: id }, body); 

    res.send(data); 

}; 

  

exports.points_delete = async(req,res)=>{ 

    const {id}= req.params; 

   await points.deleteOne({_id:id}); 

     res.send({message:"Puntuación Eliminada"}); 

}; 