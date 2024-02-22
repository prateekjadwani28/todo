import React, { useState } from 'react'

const TaskInput = ({addTask}) => {

    const [task, setTask] = useState('');

    console.log(task);

    function handleChangeEvent(event) {
        setTask(event.target.value);
    }


    function handleAddTaskEvent(event) {
        event.preventDefault();
        addTask(task);
    }

  return (
      <form className='inputField' onSubmit={handleAddTaskEvent}>
          <input type="text" placeholder='Add Item' onChange={handleChangeEvent} />
          <button>+</button>
      </form>
          
    
  )
}

export default TaskInput