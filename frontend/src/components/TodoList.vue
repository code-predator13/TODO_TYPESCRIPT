<script setup lang="ts">
  import { useTodoStore } from '@/stores/todoStore';
  import TodoItem from './TodoItem.vue';

  const todoStore = useTodoStore()
</script>

<template>
  <div class = 'todo-list'>
    <div v-if='todoStore.todos.length === 0' class='empty-state'>
      Нет задач. Добавьте первую!
    </div>
    <TodoItem
      v-else
      v-for="todo in todoStore.todos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<style scoped>
  .todo-list {
    max-width: 600px;
    margin: 0 auto;
  }

  .empty-state {
    text-align: center;
    color: #999;
    padding: 40px;
  }
</style>
