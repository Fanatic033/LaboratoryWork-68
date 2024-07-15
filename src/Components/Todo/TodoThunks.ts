import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {Task} from "./TodoSlice.ts";

export const fetchTodos = createAsyncThunk<Task[], undefined, { rejectValue: string }>('todos/fetchTodos', async (_,{rejectWithValue}) => {
    try {
        const {data: task} = await axiosApi.get<{ [key: string]: Task }>('/tasks.json')
        const tasks: Task[] = Object.keys(task).map((key) => ({
            ...task[key]
        }));
        return tasks
    }catch (e) {
        return rejectWithValue('failed to fetch tasks');
    }

})