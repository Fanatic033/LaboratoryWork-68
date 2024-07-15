import {Task} from "../Todo/TodoSlice.ts";
import {FC} from "react";

interface Props {
    task: Task;
}

const TaskItem: FC<Props> = ({task}) => {
    return (
        <>
            <div className="card mb-3 container">
                <div className="card-body">
                    <input type='checkbox' checked={task.status}/>
                    <p className='card-text'>{task.title}</p>
                </div>
                <div>
                    <button className="btn  btn-danger">delete</button>
                </div>
            </div>
        </>
    );
};

export default TaskItem;