import TodoForm from "./TodoForm.tsx";
import TaskList from "../Task/TaskList.tsx";

const Todo = () => {
    return (
        <>
            <div className="container text-center">
                <h3>Add new Task</h3>
                <TodoForm/>
            </div>
            <div>
                <TaskList/>
            </div>
        </>
    );
};

export default Todo;