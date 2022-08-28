import {createSlice} from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name:"user",
    initialState:{value:null},

    reducers:{
        login:(state,action)=>{
           state.value = action.payload
        },
        logout:(state,action)=>{
            state.value = null
        }
    }
})

export default UserSlice.reducer;
export const {login,logout} = UserSlice.actions;