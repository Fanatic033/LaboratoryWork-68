import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodos, postTodo} from "./TodoThunks.ts";

export interface Task {
    id: string;
    title: string;
    status: boolean
}

export interface TodoState {
    tasks: Task[];
    error: boolean;
    isLoading: boolean;
}

export const initialState: TodoState = {
    tasks: [],
    error: false,
    isLoading: false,
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.error = false;
                state.isLoading = true
            })
            .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.tasks = action.payload
                state.error = false
                state.isLoading = false
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.isLoading = false;
                state.error = true
            })
            .addCase(postTodo.fulfilled, (state) => {
                state.error = false
            })
        builder.addCase(postTodo.rejected, (state) => {
            state.error = true;
        });
    }
})

export const todoReducer = todoSlice.reducer