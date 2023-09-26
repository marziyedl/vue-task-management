
<script setup lang="ts">
import Badge from './Badge.vue';
</script>

<template>
    <section
        class="basis-1/2 md:basis-1/4 p-3 bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div class="flex justify-between">
            <Badge type="done" />
            <h5 class="text-lg">title</h5>
        </div>
        <p class="box-content mt-2">content</p>
    </section>
</template>