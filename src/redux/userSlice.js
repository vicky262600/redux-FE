import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState:{
        userInfo: JSON.parse(localStorage.getItem("userInfo")) ||  null,
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
            console.log(action.payload);
            state.pending = false;
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        updateError: (state) =>{
            state.error = true;
            state.pending = false;  
        }
    },
}
);

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
