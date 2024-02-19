import { useState } from "react"
import AddTask from "./AddTodoList";
import ShowTodoList from "./ShowTodoList";

const TaskOne = () =>{
const [todo, setTodo] = useState([{id:1,task:"LearnReact"},{id:2,task:"PracticeReact"}]);

const onSaveData = (input) =>{
    let todoData = {
        id:2,
        task:input
    }
    setTodo([...todo, todoData]);
}
    return(
        <>
        <h5>Add list Item</h5>
        <AddTask onSaveData={onSaveData}/>
        <ShowTodoList todo={todo}/>
        </>
    )
}

export default TaskOne;