import React, {useState} from 'react'
import CourseLearnForm from './CourseLearnForm';
import {v4 as uuidv4} from 'uuid';
import { CourseLearn } from './CourseLearn';
import CourseLearnedit from './CourseLearnedit';
uuidv4();
export const CourseLearnWrapper = () => {
  const [todos,setTodos]=useState([])
  const addTodo = todo =>{
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos)
  }
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  const deleteTodo = id =>
  {
    setTodos(todos.filter(todo => todo.id!==id) )
  }
  const editTask = (task,id) =>
  {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }
  return (
    <div className='TodoWrapper'>
      <h1>Course Learning Outcome</h1>
      <CourseLearnForm addTodo={addTodo}/>
      {todos.map((todo, index)=>(
        todo.isEditing ? (
          <CourseLearnedit editTodo={editTask} task={todo}/>
        ) :
        (
          <CourseLearn task={todo} key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}/>
        )
        
      ))}
    </div>
  )
}
export default CourseLearnWrapper