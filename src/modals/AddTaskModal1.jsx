import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import useStore from "../store/store";
import { taskConfig } from "../config/taskConfig";



const AddTaskModal = ({ state , onClose  }) => {


  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [onClose]);


  const colorConfig = taskConfig;

  const addTask = useStore((store) => store.addTask);

  const [title, setTitle] = useState("");

  const handleAddTask = () => {

    console.log("Adding task:", title, "to state:", state); 
    if (!title.trim()) return;

    addTask(title.trim(), state);

    setTitle("");

    onClose();
  };


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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
          ref={inputRef}
          type="text"
          placeholder="Task title..."
          className="w-full rounded-lg border p-3 border-blue-500 outline-blue-600 outline-none focus:ring ring-blue-600"
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
            className="rounded-lg bg-blue-500 hover:bg-blue-700   px-3 py-1 md:px-4 md:py-2 text-white "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;