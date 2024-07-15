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
    state: RootState;
    rejectValue: string;
}>('todos/AddTodo', async (taskData, {rejectWithValue, dispatch}) => {
    try {
        await axiosApi.post('/tasks.json', taskData);
        dispatch(fetchTodos());
    } catch (e) {
        return rejectWithValue('Failed to add task');
    }
});

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

export const updateTodoStatus = createAsyncThunk<Task, statusType, { rejectValue: string }>(
    'todos/updateStatus',
    async ({id, status}, {rejectWithValue}) => {
        try {
            const response = await axiosApi.get<Task>(`/tasks/${id}.json`);
            const currentTask = response.data;
            const updatedTask = {...currentTask, status};
            await axiosApi.patch(`/tasks/${id}.json`, {status});
            return {...updatedTask, id};
        } catch (e) {
            return rejectWithValue('Failed');
        }
    }
);


export type postType = { title: string, status: boolean, }
export type statusType = { id: string, status: boolean, }
