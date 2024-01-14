import { creatsSlice } from "@reduxjs/toolkit";

export const userSlice = creatsSlice({
    name: user,
    initialState:{
        name: "",
        email: ""
    },
    reducers:{
        update: (state, action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
    },
});

export const {update} = userSlice.actions;
export default userSlice.reducers;
