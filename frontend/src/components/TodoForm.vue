<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todoStore';

const todoStore = useTodoStore();
const newTodoTitle = ref('');

const handleSubmit = () => {
  if (newTodoTitle.value.trim()) {
    todoStore.addTodo(newTodoTitle.value.trim());
    newTodoTitle.value = '';
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="todo-form">
    <input
      v-model="newTodoTitle"
      type="text"
      placeholder="Добавить новую задачу..."
      class="todo-input"
    />
    <button type="submit" class="add-button">Добавить</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.add-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #359268;
}
</style>
