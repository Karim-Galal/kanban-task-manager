import { create } from 'zustand';
import { persist } from "zustand/middleware";
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
  
  deleteTask: (taskId) =>
  set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== taskId),
  })),

  draggedTask: null,
  setDraggedTask: (id) => set({ draggedTask: id }),

  moveTask: (taskId, newState) =>
  set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === taskId ? { ...task, state: newState } : task
    ),
  })),
  editTask: (id, newTitle) =>
  set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === id
        ? { ...task, title: newTitle }
        : task
    ),
  })),

  tasks : [
    { id: 1, title: "Plan the week", state: "planned" },
    { id: 2, title: "Write meeting notes", state: "planned" },
    { id: 3, title: "Update project files", state: "ongoing" },
    { id: 4, title: "Reply to emails", state: "ongoing" },
    { id: 5, title: "Finish daily report", state: "done" },
    { id: 6, title: "Back up important files", state: "done" },
  ],


})

// const useStore = create( persist(store, {name: "kanban"}));
const useStore = create( persist(store, {name: "kanban_tasks"}));

  


export default useStore;
