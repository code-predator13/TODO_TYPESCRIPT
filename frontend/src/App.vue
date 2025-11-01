<script setup lang="ts">
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <div id="app">
    <header>
      <h1>📝 Мои задачи</h1>
    </header>
    <main>
      <TodoForm />
      <TodoList />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #2c3e50;
}
</style>
