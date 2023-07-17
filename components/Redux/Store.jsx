import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import UserSlice from "./UserSlice";

const Store=configureStore({
    reducer:{
        cart:CartSlice,
        user:UserSlice,
    }
})

export default Store;