<script setup lang="ts">
import Badge from "./Badge.vue";
import type TaskModel from "../models/task.model";

const props = defineProps<TaskModel>();

defineEmits(['onTaskClick'])

</script>

<template>
  <router-link :to="props.id">
    <section class="w-full p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div class="flex justify-between">
        <Badge  :type="props.status" />
        <h5 class="text-lg">{{ props.title }}</h5>
      </div>
      <p class="box-content mt-2 min-h-[5vh]">{{ props.content }}</p>
      <svg @click.prevent="$emit('onTaskClick')" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 flex items-center text-purple-500"
        viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clip-rule="evenodd" />
      </svg>
    </section>
  </router-link>
</template>
