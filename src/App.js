import { useState } from "react";
import "./App.css";

function App() {
  let[todoInput,updateInput]=useState("test")
  let [todoList, updateTodos] = useState([
    {
      id: 1,
      task: "learn react",
    },
    {
      id: 2,
      task: "learn javascript",
    },
   
  ]);
  let nextId=3
  function addNewTodo(){
       if(todoInput===""){
        alert("add some data")
       }
       else{
        let  NewTodos=[
            ...todoList,
            {
              id:nextId++,
              task:todoInput
            }
          ]
          updateTodos(NewTodos)
          updateInput("")
       }
  }
  function deleteTodo(id){
  
   let updatedTodos = todoList.filter(
        (todo)=>{
            return todo.id!==id
        }
     )
     updateTodos(updatedTodos)
     
  }
  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center">Todo App using React</h1>
      <div className="input-group">
        <input className="form-control" onChange={(e)=>{
            let task=e.target.value
            updateInput(task)
        }} type="text" value={todoInput} />
        <button onClick={()=>{
          addNewTodo()
        }} className="btn btn-success">Add</button>
      </div>
      <ul className="list-group">
        {todoList.map((todo) => {
          return (
            <li className="list-group-item">
              <p>{todo.task}</p>
              <button onClick={()=>{
                deleteTodo(todo.id)
              }} className="btn">❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
