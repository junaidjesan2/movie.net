"use client"

const { createSlice } = require("@reduxjs/toolkit")

const cartSlice=createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter((item)=>item.rank!==action.payload)
        }
    }
})

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;