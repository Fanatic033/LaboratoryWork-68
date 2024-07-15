import {Task} from "../Todo/TodoSlice.ts";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store.ts";
import {deleteTodo, updateTodoStatus,} from "../Todo/TodoThunks.ts";

interface Props {
    task: Task;
}

const TaskItem: FC<Props> = ({task}) => {
    const dispatch: AppDispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm('Вы уверены?'))
            dispatch(deleteTodo(task.id));
    };

    const handleChange = () => {
        dispatch(updateTodoStatus({id: task.id, status: !task.status}));
    };
    return (
        <>
            <div className="card mb-3">
                <div className="card-body d-flex align-items-center">
                    <div className="form-check ps-5 d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check-input fs-1 ps-5 border-black"
                            id={`task-${task.id}`}
                            checked={task.status}
                            onChange={handleChange}
                        />
                        <label
                            className={`ms-5 fs-4 form-check-label ${task.status ? 'text-decoration-line-through' : ''}`}
                            htmlFor={`task-${task.id}`}>
                            {task.title}
                        </label>
                    </div>
                    <button className="btn btn-danger ms-auto" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default TaskItem;