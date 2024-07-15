import {Task} from "../Todo/TodoSlice.ts";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store.ts";
import {deleteTodo,} from "../Todo/TodoThunks.ts";

interface Props {
    task: Task;
}

const TaskItem: FC<Props> = ({task}) => {
    const dispatch: AppDispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(task.id));
    };
    return (
        <>
            <div className="card mb-3 container">
                <div className="card-body">
                    <input type='checkbox' checked={task.status}/>
                    <p className='card-text'>{task.title}</p>
                </div>
                <div>
                    <button className="btn  btn-danger" onClick={handleDelete}>delete</button>
                </div>
            </div>
        </>
    );
};

export default TaskItem;