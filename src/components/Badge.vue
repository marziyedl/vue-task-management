<template>
    <div class="bg-green-900 text-white p-1 rounded-md">
      <small>  {{ type }}</small>
    </div>
</template>
<script setup lang="ts">
defineProps<{ type: 'done' | 'toDo' | 'rejected' }>();

</script>