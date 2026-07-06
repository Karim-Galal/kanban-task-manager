import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import useStore from "../store/store";
import { taskConfig } from "../config/taskConfig";
import useModalKeyboard from "../hooks/useModalKeyboard";


const AddTaskModal = ({ state , onClose  }) => {

  

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  const colorConfig = taskConfig;

  const addTask = useStore((store) => store.addTask);

  const [title, setTitle] = useState("");

  const handleAddTask = () => {

    if (!title.trim()) return;

    addTask(title.trim(), state);

    setTitle("");

    onClose();
  };


  useModalKeyboard({
    onEscape: onClose,
    onEnter: handleAddTask,
  });

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/40 p-3 md:p-0"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md rounded-xl bg-white p-3 md:p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="mb-4 text-xl font-semibold">
          Add Task to &nbsp;
          <span className={`${colorConfig[state].text} font-bold`}>
            { state.toUpperCase() }
          </span>
        </h3>
        <input
          onChange={(e) => setTitle(e.target.value)}
          ref={inputRef}
          type="text"
          placeholder="Task title..."
          className={`w-full rounded-lg border p-3 ${colorConfig[state].borderClr} outline-none focus:ring ${colorConfig[state].focusRing}`}
        />
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleAddTask}
            className={`rounded-lg ${colorConfig[state].bg} ${colorConfig[state].hoverBg}   px-3 py-1 md:px-4 md:py-2 text-white `}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;