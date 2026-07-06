import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const store = (set) => ({ 
  // addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  addTask: (title, taskState) =>
  set((state) => ({
    tasks: [
      ...state.tasks,
      {
        // id: Date.now(),
        id: uuidv4(),
        title,
        state: taskState,
      },
    ],
  })),
  
  tasks : [
    { id: 1, title: 'Task 1', state: 'planned' }, 
    { id: 2, title: 'Task 2', state: 'planned' }, 
    { id: 3, title: 'Task 3', state: 'ongoing' },
    { id: 4, title: 'Task 4', state: 'ongoing' },
    { id: 5, title: 'Task 5', state: 'done' },
    { id: 6, title: 'Task 6', state: 'done' },
    { id: 7, title: 'Task 7', state: 'ongoing' },
  ],


})


const log = (config)  => (set, get, api) => config(
  (...args) => {
    console.log('  applying', args)
    set(...args)
    console.log('  new state', get())
  },
  get,
  api
);

const useStore = create(log(store));

export default useStore;
