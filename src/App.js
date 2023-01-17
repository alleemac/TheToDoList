//Imports
import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form"
import ToDoList from "./components/todolist";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  //useStates
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState ([]);
  const [status, setStatus] = useState("all")
  const [filtered, filteredResults] = useState([]);

//Run When App Starts
useEffect(() => {
  getLocalStorage();
}, []);


  useEffect(() => {
    filterHandler();
    saveLocalTodos();
      }, [todos, status]);
      
  //Filtering Functionality
  function filterHandler(){
    switch(status){
      case "completed": filteredResults(todos.filter(todo => todo.complete === true))
      break;
      case "uncompleted": filteredResults(todos.filter(todo => todo.complete === false))
      break;
      default: filteredResults(todos);
      break;
    }
  };

  //Save Items to Local Storage
  const saveLocalTodos = () => {
      if (todos.length > 0) { 
        localStorage.setItem("todos", JSON.stringify(todos))
      };
  };

  //Get Local Items For Reoccuring Visitor
  const getLocalStorage = () => {
    if(localStorage.getItem('todos')===null){
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
   let localToDo = JSON.parse(localStorage.getItem("todos"))
   setToDos(localToDo);
  }
};

  return (
    <div className="App">
    <Header />
      <Form 
      inputText = {inputText}
      todos = {todos}
      setToDos = {setToDos}
      setInputText={setInputText}
      setStatus = {setStatus}
      />
      <ToDoList 
        setToDos = {setToDos}
        todos={todos}
        filtered = {filtered}
      />
      <Footer />
    </div>
  );
}

export default App;
