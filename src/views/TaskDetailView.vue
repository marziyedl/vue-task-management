<script setup lang="ts">
import useFetchById from "@/composable/useFetchById";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Badge from "@/components/Badge.vue";

const { getById } = useFetchById<{ id: string }>("tasks");
const route = useRouter();
const taskDetail = ref(getById(route.currentRoute.value.params.id as string));

</script>

<template>
    <div class="flex items-center justify-center h-52">
    <section class="h-full w-1/2 m-2 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div class="flex justify-between">
            <Badge :type="taskDetail?.status || 'done'" />
            <h5 class="text-lg">{{ taskDetail?.title }}</h5>
        </div>
        <p class="box-content mt-2">{{ taskDetail?.content }}</p>
    </section>
    </div>
</template>
