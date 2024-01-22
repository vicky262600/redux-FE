import { updateStart, updateSuccess, updateError } from "./userSlice";
import axios from "axios";

export const updateUser = async (user, dispatch)=>{
    dispatch(updateStart());
    try{
        const res = await axios.post("./auth/login", user);
        dispatch(updateSuccess(res.data));
        console.log(res.data);
    }catch(err){
        dispatch(updateError());
        alert("wrong password");
    }
}