import { MdDelete ,MdModeEdit } from "react-icons/md";

function Todo({tasks,handleDelete,handleEdit}) {
  return (
    <>
    <ul className="flex flex-col justify-between items-center mt-3">
        {
          tasks.map((task) => {
              // console.log(task.id)
            return (
                 
              <li key={task.id} 
                  className="flex gap-2 p-3 justify-between mb-4 items-center border border-rose-300 border-3 min-w-[400px] rounded-[12px] text-[#212121] font-bold"
                >
                <span>{task.task}</span>
                <p className="flex gap-4">
                   <MdDelete onClick={() => handleDelete(task.id)} className="cursor-pointer text-2xl text-red-700"/>
                   <MdModeEdit onClick={() => handleEdit(task.id)} className="cursor-pointer text-2xl text-blue-700"/>
                </p>
              </li>
            )
         })
        }
    </ul>
    </>
  )
}

export default Todo;
