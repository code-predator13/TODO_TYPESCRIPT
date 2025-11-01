<script setup lang="ts">
import { onMounted } from 'vue';
import { useTodoStore } from '@/stores/todoStore';
import TodoItem from './TodoItem.vue';

const todoStore = useTodoStore();

onMounted(() => {
  todoStore.fetchTodos();
});
</script>

<template>
  <div class="todo-list">
    <div v-if="todoStore.loading" class="loading">
      Загрузка задач...
    </div>

    <div v-else-if="todoStore.error" class="error">
      {{ todoStore.error }}
    </div>

    <div v-else-if="todoStore.todos.length === 0" class="empty-state">
      Нет задач. Добавьте первую!
    </div>

    <TodoItem
      v-else
      v-for="todo in todoStore.todos"
      :key="todo._id"
      :todo="todo"
    />
  </div>
</template>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
}

.empty-state, .loading {
  text-align: center;
  color: #999;
  padding: 40px;
  font-size: 16px;
}

.error {
  text-align: center;
  color: #ff4444;
  padding: 20px;
  background-color: #ffeeee;
  border-radius: 4px;
  margin-bottom: 20px;
  font-weight: 500;
}
</style>
