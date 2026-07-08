import useStore from '../store/store';
import useModalKeyboard from '../hooks/useModalKeyboard';
import { useEffect, useRef, useState } from 'react';

const EditTaskModal = ({ taskId , oldTitle, onClose }) => {

  const editTask = useStore((store) => store.editTask);

  const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current?.focus();
    }, []);

  const [title, setTitle] = useState(oldTitle);

  const handleEditTask = () => {

    if (!title.trim()) return;
    
    editTask(taskId, title.trim());

    onClose();
  }

  useModalKeyboard({
    onEscape: onClose,
    onEnter: handleEditTask,
  });



  return (
    
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/40 p-3 md:p-0"
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className=" w-full max-w-md rounded-xl bg-white p-3 md:p-6 shadow-lg">
        <h3 className="text-lg font-bold mb-4">Edit Task</h3>
        <input
          onChange={(e) => setTitle(e.target.value)}
          ref={inputRef}
          type="text"
          placeholder="Enter new title..."
          value={title}
          className={`w-full rounded-lg border p-3 border-blue-300 outline-none focus:ring focus:ring-blue-500`}
        />
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleEditTask}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  )

}

export default EditTaskModal;
