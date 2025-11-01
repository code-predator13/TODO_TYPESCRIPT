import { defineStore } from "pinia";
import type { Todo } from "@/types/todo";


export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    nextId: 1,
  }),

  getters: {
    activeTodos: (state) => state.todos.filter(todo => !todo.completed),
    completedTodos: (state) => state.todos.filter(todo => todo.completed),
  },

  actions: {
    addTodo(title: string) {
      this.todos.push({
        id: this.nextId++,
        title,
        completed: false,
        createdAt: new Date(),
      });
    },

    toggleTodo(id: number) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo(id: number) {
      const index = this.todos.findIndex(t => t.id === id);
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    },
  },
})
