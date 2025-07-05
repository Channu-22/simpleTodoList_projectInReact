// import React from 'react'

function Form( {input,setInput,handleSubmit,isEditing}) {
  return (
    <div className="flex items-center justify-center"> 
      <form action="" className="flex justify-center items-center gap-2 mt-2 p-4" onSubmit={handleSubmit}>
        <input type="text"  placeholder="Enter your task..." value={input} onChange={(e) => setInput(e.target.value)} className="p-3 border border-rose-300 focus:border-rose-500 focus:ring-rose-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white text-rose-700 placeholder-rose-400"/>
        <button type="submit" className="bg-rose-300 hover:bg-rose-400 px-4 py-2 rounded-xl cursor-pointer  " >{isEditing ? "Edit Task" :"Add Task"}</button>
    </form>
    </div>
  )
}

export default Form;
