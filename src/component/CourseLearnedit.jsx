import React, {useState} from 'react'

export const CourseLearnedit = ({editTodo,task}) => {
  const [value, setValue]=useState(task.task)
  const handleSubmit = (e) =>{
    e.preventDefault();
  
    editTodo(value,task.id);

    setValue("")
  
};
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder='Update Objective' onChange ={(e) => setValue(e.target.value)} className="todo-input"/>
      <button type="submit" className="todo-btn">Update Outcome</button>
    </form>
  )
}

export default CourseLearnedit
