import { create } from 'zustand';

// Store global com Zustand: tarefas + ações de CRUD básico
export const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => {
      const trimmed = title.trim();
      if (!trimmed) return state; // evita tarefas vazias

      const newTask = {
        id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
        title: trimmed,
      };

      return { tasks: [...state.tasks, newTask] };
    }),
  updateTask: (id, title) =>
    set((state) => {
      const trimmed = title.trim();
      if (!trimmed) return state;

      // troca apenas a tarefa alvo
      const updated = state.tasks.map((task) =>
        task.id === id ? { ...task, title: trimmed } : task
      );
      return { tasks: updated };
    }),
  deleteTask: (id) =>
    set((state) => ({
      // remove pelo id
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));
