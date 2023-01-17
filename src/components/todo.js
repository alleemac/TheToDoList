import React, { useState } from "react";



function Todo({text, todo, todos, setToDos}){

function deleteHandler(){
setToDos(todos.filter((listItem) => listItem.id !== todo.id))
}


function completedHandler(){
    setToDos(
        todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, complete: !item.complete,
                };
            }
            return item;
        })
    );
}

    return (
        <div className="todo">
<li className={`todo-item ${todo.complete ? "completed": ""}`}> {text}</li>
<button className="complete-btn" onClick ={completedHandler}><i className="fas fa-check"></i></button>
<button className="trash-btn" onClick ={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>

);
};

export default Todo;