import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store.ts";
import {useEffect, useState} from "react";
import {fetchTodos} from "../Todo/TodoThunks.ts";
import {Task} from "../Todo/TodoSlice.ts";
import TaskItem from "./TaskItem.tsx";

const TaskList = () => {
    const dispatch: AppDispatch = useDispatch();
    const Tasks = useSelector((state: RootState) => state.todos.tasks);
    const [data, setData] = useState(Tasks);


    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    useEffect(() => {
        setData(Tasks)
    }, [Tasks]);
    return (
        <>
            <div className="text-center">
                <h2> To-do List</h2>
                {data.map((task: Task) => (
                    <TaskItem key={task.id} task={task}/>
                ))}
            </div>

        </>
    );
};

export default TaskList;