const assignement = require("../models/assignementSchema");

exports.assignement_create = async(req,res)=>{
    const {body,query,params} =req;

    // params.id;
    // query.id
     let newassignement = new assignement(body);

    await newassignement.save()
    .then((newDBObject)=> console.log("Success!",newDBObject))
    .catch((err)=>console.log("oops!",err));
    res.send(newassignement);

};
exports.assigment_get =async(req,res)=>{
    const data = await assignement.find();
    res.send(data);
};

exports.assigment_delete = async(req,res)=>{
    const {id}= req.params;
    await assignement.deleteOne({_id:id});
     res.send({message:"Curso Eliminado"});
}