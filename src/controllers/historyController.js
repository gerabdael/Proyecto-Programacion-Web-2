const history = require("../models/historySchema"); 

  

exports.history_create =(req,res)=>{ 

    const {body} =req; 

    let newhistory = new history(body); 

  

    newhistory.save() 

    .then((newDBObject)=> console.log("Success!",newDBObject)) 

    .catch((err)=>console.log("oops!",err)); 

    res.send(newhistory); 

}; 

  

exports.history_getbyiduser = async(req, res) => { 

    const { id } = req.params; 

    const data = await history.findByid(id); 

     
    res.send(data); 

}; 