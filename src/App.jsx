import TaskInput from "./components/TaskInput";
import React, { useState } from 'react'

function App() {
  
  const [toDoList, setToDoList] = useState([]);

  console.log(toDoList);
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  }

  return (
    <div className="container">
      <h1>Task  </h1>
      <TaskInput addTask={addTask}/>
      <div className="toDoList">
        <span>To Do</span>
        <ul className="list-items">

        </ul>
      </div>
    </div>
  );
}

export default App;
