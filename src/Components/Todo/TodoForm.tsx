import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {postTodo} from "./TodoThunks.ts";

const TodoForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        if (title === '') {
            alert('пустой запрос')
            return;
        }
        e.preventDefault();
        dispatch(postTodo({title, status: false}));
        setTitle('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={'mb-5'}>
                <div className="input-group">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Add a new task"
                        className={'form-control'}
                        aria-describedby="button"
                    />
                    <button type="submit" className={'btn btn-primary'} id={'button'}>Add</button>
                </div>
            </form>
        </>
    );
};

export default TodoForm;
