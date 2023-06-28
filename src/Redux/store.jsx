import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import whatherSlice from "./fechuare/whatherSlice";

import logger from "redux-logger";

const store=configureStore({
    reducer:{whaterData:whatherSlice},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})


export default store