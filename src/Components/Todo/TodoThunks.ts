import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {Task} from "./TodoSlice.ts";

export const fetchTodos = createAsyncThunk<Task[],undefined,{rejectValue: string}>('todos/fetchTodos', async () => {
    const {data: task} = await axiosApi.get<{ [key: string]: Task }>('/tasks.json')
    const tasks: Task[] = Object.keys(task).map((key) => ({
        id: key,
        ...task[key]
    }));
    return tasks
})