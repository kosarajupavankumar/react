import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        status: 'idle',
        user: null,
        isError : null,
        
    },
    reducers: {
        fetchUserRequest: (state) => {
            state.status = 'loading';
        },
        fetchUserSuccess: (state, action) => {
            state.status = 'success';
            state.user = action.payload;
        },
        fetchUserFailure: (state, action) => {
            state.status = 'error';
            state.isError = action.payload;
        },
        
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default userSlice;