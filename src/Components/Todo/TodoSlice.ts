import {createSlice} from "@reduxjs/toolkit";
import {fetchTodos} from "./TodoThunks.ts";

export interface Task {
    title: string;
    status: boolean
}

export interface TodoState {
    tasks: Task[];
    error: boolean;
}

export const initialState: TodoState = {
    tasks: [],
    error: false
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchTodos.fulfilled, (state,action) => {
            state.tasks = action.payload
        })
    }
})

export const todoReducer = todoSlice.reducer