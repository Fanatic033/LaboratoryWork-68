import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {Task} from "./TodoSlice.ts";
import {RootState} from "../../store.ts";

export const fetchTodos = createAsyncThunk<Task[], undefined, {
    rejectValue: string
}>('todos/fetchTodos', async (_, {rejectWithValue}) => {
    try {
        const {data: task} = await axiosApi.get<{ [key: string]: Task }>('/tasks.json')
        const tasks: Task[] = Object.keys(task).map((key) => ({
            ...task[key],
            id: key,
        }));
        return tasks
    } catch (e) {
        return rejectWithValue('failed to fetch tasks');
    }
})

export const postTodo = createAsyncThunk<void, postType, {
    state: RootState
}>('todos/AddTodo', async (_arg,) => {
    try {
        await axiosApi.post('/tasks.json', _arg)
    } catch (e) {
        return console.error(e)
    }
})


export const deleteTodo = createAsyncThunk<string, string, { rejectValue: string }>(
    'todos/deleteTodo',
    async (id, {rejectWithValue}) => {
        try {
            await axiosApi.delete(`/tasks/${id}.json`);
            return id;
        } catch (e) {
            return rejectWithValue('Failed to delete task');
        }
    }
);

export type postType = { title: string, status: boolean, }
