import React, {useState} from 'react'

export const Todoform = ({addTodo}) => {
  const [value, setValue]=useState("")
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(value){
    addTodo(value);

    setValue("")
  }
};
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder='Write Here' onChange ={(e) => setValue(e.target.value)} className="todo-input"/>
      <button type="submit" className="todo-btn">Add</button>
    </form>
  )
}

export default Todoform
