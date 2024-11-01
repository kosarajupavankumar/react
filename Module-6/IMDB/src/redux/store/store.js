import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import todoSlice from "../slice/todoSlice";

const Store = configureStore({
    reducer: {
        counter : counterReducer,
        todo : todoSlice.reducer,
    },
});

export default Store;