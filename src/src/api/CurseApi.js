import { axiosBase as axios } from "./Config";
export const Create= async (curse)=>{
    try{
        const resPonse = await axios.post("/assignement",curse,{

        });
        console.log("createcourse",resPonse);
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const GetAll = async ()=>{
    try{
        const response = await axios.get("/assignement",{
        });
        console.log("getAllCurses", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}