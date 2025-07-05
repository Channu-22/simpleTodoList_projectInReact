// import React from 'react'

import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

function TodoList() {
  const [input,setInput]=useState("");
  const [tasks,setTasks]=useState([]);
  const [isEditing,setIsEditing]=useState(false);
  const [idToEdit,setIdToEdit]=useState(null)

   
  function handleSubmit(e){
    e.preventDefault();
   
    if(isEditing){
      setTasks(
        tasks.map((existingTask) => {
        return existingTask.id == idToEdit ? {...existingTask, task:input} : existingTask;
      })
      )
      setIsEditing(false);
      setIdToEdit(null);
    }
    else{
      const obj={
      task:input,
      id:Date.now(),
     }
     setTasks([...tasks,obj]);
    }






    // RESETTING THE INPUT
    setInput("");

  }
  function handleDelete(idToDelete){
    setTasks( tasks.filter((task) => {
      return task.id !== idToDelete;
    }))
  }

  function handleEdit(idToEdit){
    const editing=tasks.find((task) => {
      return task.id == idToEdit;
    })
    setInput(editing.task);
    setIsEditing(true);
    setIdToEdit(idToEdit);
  }




  return (
    <>
      <h1 className="text-center mt-20 text-4xl font-bold underline text-rose-600 ">TODO LIST </h1>
      <Form input={input} setInput={setInput} handleSubmit={handleSubmit} isEditing={isEditing} />
      <Todo tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit}/>
   </>
  )
}

export default TodoList;
