"use client"

const { createSlice } = require("@reduxjs/toolkit")
const userSlice=createSlice({
    name:"user",
    initialState:{user:"",},
    reducers:{
        login(state,action){
            state.user=action.payload
        },
        logout(state,action){
            state.user=""
        }
    }
})

export const {login,logout}=userSlice.actions;
export const selectUser=(state)=>state.user;
export default userSlice.reducer;