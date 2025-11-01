import { defineStore } from 'pinia';
import type { Todo } from '@/types/todo';
import { todoAPI } from '@/services/api';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    activeTodos: (state) => state.todos.filter(todo => todo.status !== 'completed'),
    completedTodos: (state) => state.todos.filter(todo => todo.status === 'completed'),
  },

  actions: {
    async fetchTodos() {
      this.loading = true;
      this.error = null;
      try {
        this.todos = await todoAPI.getAll();
      } catch (err) {
        this.error = 'Ошибка загрузки задач';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    async addTodo(title: string) {
      try {
        const newTodo = await todoAPI.create(title);
        this.todos.push(newTodo);
      } catch (err) {
        this.error = 'Ошибка добавления задачи';
        console.error(err);
      }
    },

    async toggleTodo(id: string) {
      try {
        const todo = this.todos.find(t => t._id === id);
        if (todo) {
          const newStatus = todo.status === 'completed' ? 'active' : 'completed';
          const updatedTodo = await todoAPI.update(id, { status: newStatus });
          const index = this.todos.findIndex(t => t._id === id);
          if (index !== -1) {
            this.todos[index] = updatedTodo;
          }
        }
      } catch (err) {
        this.error = 'Ошибка обновления задачи';
        console.error(err);
      }
    },

    async deleteTodo(id: string) {
      try {
        await todoAPI.delete(id);
        const index = this.todos.findIndex(t => t._id === id);
        if (index > -1) {
          this.todos.splice(index, 1);
        }
      } catch (err) {
        this.error = 'Ошибка удаления задачи';
        console.error(err);
      }
    },
  },
});
