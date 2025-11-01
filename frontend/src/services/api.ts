import ky from "ky";
import type { Todo } from "@/types/todo";

const API_URL = 'http://localhost:3000/api'

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
      json: { title }
    }).json<Todo>()
  },

  update: async (id: string, data: Partial<Todo>): Promise<Todo> => {
    return await api.put(`todo/${id}`, {
      json: data
    }).json<Todo>();
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`todo/${id}`);
  },
}
