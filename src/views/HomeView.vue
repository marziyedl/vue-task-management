<script setup lang="ts">
import { reactive } from 'vue';
import useFetchDataFromLocalStorage from '@/composable/useFetchDataFromLocalStorage';
import Task from '@/components/Task.vue';

const tasks = reactive(useFetchDataFromLocalStorage())
</script>

<template>
  <main class="container mt-3 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
    <Task  v-for=" task in tasks" :title="task.title" :id="task.id" :status="task.status" :content="task.content" />
  </main>
</template>
