import useStore from '../store/store';
import useModalKeyboard from '../hooks/useModalKeyboard';

const DeleteTaskModal = ({ taskId, onClose }) => {

  const deleteTask = useStore((store) => store.deleteTask);

  const handleDeleteTask = () => {
    
    deleteTask(taskId);

    onClose();
  }

  useModalKeyboard({
    onEscape: onClose,
    onEnter: handleDeleteTask,
  });


  return (
    
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/40 p-3 md:p-0"
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">Delete Task</h3>
        <p className="mb-4">Are you sure you want to delete this task?</p>
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDeleteTask}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )

}

export default DeleteTaskModal;
