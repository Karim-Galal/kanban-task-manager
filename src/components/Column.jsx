// this  will contain all the planed , ongoing and done tasks 
// icons 
import {taskConfig} from '../config/taskConfig';

import { IoMdAddCircle } from "react-icons/io";
// 
import { useState } from "react";

import useStore from '../store/store';
import Task from './Task';
import AddTaskModal from '../modals/AddTaskModal';


export default function Column({ state }) {

  const [openInput, setOpenInput] = useState(false);

  const unfilterTasks = useStore();

  const tasks = unfilterTasks.tasks.filter(
    (task) => task.state === state
  );



  const config = taskConfig[state];

  return (
    <div 
      onDragOver={(e) => e.preventDefault()}
      
      onDrop={() => {
        unfilterTasks.moveTask(
          unfilterTasks.draggedTask,
          state
        );
      }}
      className="rounded-lg bg-gray-100 p-4 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className={`${config.text}   text-lg font-bold capitalize flex items-center gap-2 `}>
          {config.icon}
          {state}


        </h2>
        <div 
          className={`${config.text} ${config.hoverText} flex items-center gap-1  cursor-pointer `}
          // onClick={()=> unfilterTasks.addTask('New Task', state)}  
          onClick={() => setOpenInput(true)}
        >

          <IoMdAddCircle
              className={` text-2xl`}
              

            />
            <span className={`text-sm`}>
              add task
            </span>
        </div>
          
      </div>

      <div className="space-y-3">
        
        {tasks.map((task) => (  

          <div key={task.id}
            // className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
              <Task task={task} />
            
          </div>
          
        ))}

        {tasks.length === 0 && (
          <div className="text-gray-500 text-sm text-center pt-3 border-t-2 border-gray-200">
            No tasks to show
          </div>
        )}

        {openInput && (
          <AddTaskModal 
            state={state}
            stateColor={config.color}
            onClose={() => setOpenInput(false)}
          />
        )}

      </div>
    </div>
  );
}