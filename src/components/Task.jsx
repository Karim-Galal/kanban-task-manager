import { FaRegTrashAlt , FaRegEdit} from "react-icons/fa";
import { useState } from "react";
import DeleteTaskModal from "../modals/DeleteTaskModal";
import EditTaskModal from "../modals/EditTaskModal";
import useStore from "../store/store";


const Task = ({ task }) => {

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const setDraggedTask = useStore((state) => state.setDraggedTask);

  return (
    <div 
      draggable 

      onDragStart={() => {
        setDraggedTask(task.id);
      }}

      className="cursor-move rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md flex items-start justify-between">
      <h3 className="font-medium text-gray-800  word-break overflow-hidden">
        {task.title}
      </h3>
      <div className="flex items-center gap-2">
        <span
          className="p-2 text-blue-500 hover:text-blue-700 text-sm flex items-center gap-1 cursor-pointer "
          onClick={() => setOpenEditModal(true)}
        >
          <FaRegEdit />
        </span>
        <span 
          onClick={() => setOpenDeleteModal(true)}
          className="p-1 text-red-500 hover:text-red-700 text-sm flex items-center gap-1 cursor-pointer ">
          <FaRegTrashAlt />
        </span>
      </div>

      {openDeleteModal && (
        <DeleteTaskModal 
          taskId={task.id}
          onClose={() => setOpenDeleteModal(false)}
        />
      )}
      {openEditModal && (
        <EditTaskModal 
          taskId={task.id}
          oldTitle={task.title}
          onClose={() => setOpenEditModal(false)}
        />
      
      )}

    </div>
  );
};

export default Task;