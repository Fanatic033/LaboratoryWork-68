import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {fetchTodos, postTodo} from "./TodoThunks.ts";

const TodoForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(postTodo({title, status: false}));
        setTitle('');
        dispatch(fetchTodos())
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new task"
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default TodoForm;
