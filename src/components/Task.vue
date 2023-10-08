<script setup lang="ts">
import Badge from "./Badge.vue";
import type TaskProps from "../models/task.model";

const props = defineProps<TaskProps>();
</script>

<template>
  <router-link :to="props.id">
    <section class="w-full p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div class="flex justify-between">
        <Badge :type="props.status" />
        <h5 class="text-lg">{{ props.title }}</h5>
      </div>
      <p class="box-content mt-2 min-h-[5vh]">{{ props.content }}</p>
    </section>
  </router-link>
</template>
