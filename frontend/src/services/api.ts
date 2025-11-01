import ky from "ky";
import type { Todo } from "@/types/todo";

const API_URL = 'http://localhost:3001/api/'

const api = ky.create({
  prefixUrl: API_URL,
  timeout: 10000,
  retry: 0,
})

export const todoAPI = {
  getAll: async(): Promise<Todo[]> => {
    return await api.get('todo').json<Todo[]>()
  },

  create: async (title: string): Promise<Todo> => {
    return await api.post('todo', { 
      json: {
        title,
        status: false,
        dataCreate: new Date().toISOString()
      }
    }).json<Todo>()
  },

  toggle: async (id: number): Promise<Todo> => {
    return await api.patch(`todo/${id}/toggle`).json<Todo>();
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`todo/${id}`);
  },
}
