import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        //counter is the name of slice
        counter: counterReducer
    }
})