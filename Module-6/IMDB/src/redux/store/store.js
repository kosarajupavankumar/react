import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import todoSlice from "../slice/todoSlice";
import userSlice from "../slice/userSlice";
import userMiddleware from "../middleware/userMiddleware";

const Store = configureStore({
    reducer: {
        counter : counterReducer,
        todo : todoSlice.reducer,
        user :  userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userMiddleware)
});

export default Store;