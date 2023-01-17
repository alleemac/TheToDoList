import React from "react";

function Form({setInputText, todos, setToDos, inputText, setStatus}){

    function inputTextHandler(event){
    setInputText(event.target.value)
    }

    function submitToDoHandler(event){

    event.preventDefault();
    setToDos([...todos, 
      {text: inputText,
        complete: false,
        id: Math.random() * 2000
      }])
      setInputText("")
    };
   
    function statusHandler(event){
setStatus(event.target.value)

    };

    return (
        <form>
        <input value = {inputText} onChange = {inputTextHandler} type="text" className="todo-input" />
        <button onClick = {submitToDoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange = {statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;