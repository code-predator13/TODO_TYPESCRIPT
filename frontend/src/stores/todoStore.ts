import { defineStore } from "pinia";
import type { Todo } from "@/types/todo";
import {todoAPI} from "@/services/api.ts";


export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    nextId: 1,
  }),

  getters: {
    activeTodos: (state) => state.todos.filter(todo => !todo.status),
    completedTodos: (state) => state.todos.filter(todo => todo.status),
  },

  actions: {

    async fetchTodos() {
      this.todos = await todoAPI.getAll();
    },

    addTodo(title: string) {
      this.todos.push({
        _id: this.nextId++,
        title,
        status: false,
        dataCreate: new Date(),
      });
    },

    toggleTodo(id: number) {
      const todo = this.todos.find(t => t._id === id);
      if (todo) {
        todo.status = !todo.status;
      }
    },

    deleteTodo(id: number) {
      const index = this.todos.findIndex(t => t._id === id);
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    },
  },
})
