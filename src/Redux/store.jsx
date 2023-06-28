import { configureStore } from "@reduxjs/toolkit";

import whatherSlice from "./fechuare/whatherSlice";


const store=configureStore({
    reducer:{
        wheterData:whatherSlice
    },
    
})


export default store