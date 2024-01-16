import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState:{
        userInfo:{
            email: "",
            password: ""
        },
        pending: false,
        error: false
    },
    reducers:{
        updateStart: (state)=>{
            // state.name = action.payload.name;
            // state.password = action.payload.password;
            state.pending = false;
        },
        updateSuccess: (state, action) =>{
            state.pending = false;
            state.userInfo = action.payload;
        },
        updateError: (state) =>{
            state.error = true;
            state.pending = false;
        }
    },
});

export const {updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducers;
