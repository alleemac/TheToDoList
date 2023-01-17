import React from "react";
import Todo from "./todo";

function ToDoList({ todos, setToDos, filtered }){
    return (    
    <div className="todo-container">
    <ul className="todo-list">  
    {filtered.map(todo => (
        <Todo 
        key = {todo.id}
        text = {todo.text}
        setToDos = {setToDos}
        todos={todos}
        todo={todo}
        />
    ))}
    </ul>  
    </div> 
    )
};

export default ToDoList;