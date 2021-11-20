import { axiosBase as axios } from "./Config";

export const Create= async (user)=>{
    try{
        const resPonse = await axios.post("user",user);
        console.log("createcourse",resPonse);
    }
    catch(error){
        console.error(error);
        return error;
    }
}