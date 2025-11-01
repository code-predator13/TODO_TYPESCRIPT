<script setup lang="ts">

  import type { Todo } from '@/types/todo';
  import { useTodoStore } from '@/stores/todoStore';

  interface Props {
    todo: Todo;
  }

  const props = defineProps<Props>()
  const todoStore = useTodoStore()
</script>

<template>
  <div class="todo-item" :class="{ completed: todo.status }">
    <input
      type="checkbox"
      :checked="todo.status"
      @change="todoStore.toggleTodo(todo._id)"
    />
    <span class="todo-title">{{ todo.title }}</span>
    <button @click="todoStore.deleteTodo(todo._id)" class="delete-button">
      Удалить
    </button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: white;
}

.todo-item.completed .todo-title {
  text-decoration: line-through;
  color: #999;
}

.todo-title {
  flex: 1;
}

.delete-button {
  padding: 6px 12px;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #cc0000;
}
</style>
