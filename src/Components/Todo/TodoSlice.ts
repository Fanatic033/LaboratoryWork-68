import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodos} from "./TodoThunks.ts";

export interface Task {
    id: string;
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
        builder.addCase(fetchTodos.fulfilled, (state,action: PayloadAction<Task[]>) => {
            state.tasks = action.payload
            state.error = false
        })
    }
})

export const todoReducer = todoSlice.reducer