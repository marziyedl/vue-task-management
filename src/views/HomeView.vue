<script setup lang="ts">
import { onMounted, ref } from "vue";
import Task from "@/components/Task.vue";
import Modal from "@/components/Modal.vue";
import type TaskModel from "@/models/task.model";
import { useDeleteTask ,useFetchAll} from "@/composable";

const { fetchTasks } = useFetchAll();
const {deleteItem } = useDeleteTask("tasks");

const  tasks = ref<TaskModel[]>([])  
const isOpen = ref<boolean>(false);
const currentTask = ref<TaskModel>();

const openModal = (task:TaskModel) => {
  isOpen.value = true;
  currentTask.value = task
};

onMounted(() => {
tasks.value = fetchTasks()
})
const onDeleteItem = (id:string = '') => {
  deleteItem(id)
  tasks.value = fetchTasks()
  isOpen.value = false;
}
</script>

<template>
  <main class="container mt-3 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
    <section v-for="task in tasks">
      <Task :title="task.title" :id="task.id" :status="task.status" :content="task.content"
        @on-task-click="openModal(task)" />
    </section>
  </main>
  <Modal v-model:is-open="isOpen" @on-Ok="onDeleteItem(currentTask?.id)"></Modal>
</template>
