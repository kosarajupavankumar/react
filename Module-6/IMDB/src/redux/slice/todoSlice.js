import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: "",
        todoList: []
    },
    reducers: {
        updateInputField: (state, action) => {
            state.value = action.payload;  
            console.log(state.value);          
        },
        addTodo: (state, action) => {
            state.todoList.push(action.payload.value);
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((_, index) => index === action.payload);
        }
    }
});



export default todoSlice;