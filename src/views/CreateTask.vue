<template>
  <div class="bg-gray-100 mx-auto max-w-6xl py-20 px-12 lg:px-24 shadow-xl mb-24">
    <form @submit="onSubmit">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="-mx-3 md:flex flex-col mb-6">
          <div class="md:w-full px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
              Title*
            </label>
            <Field name="title" bind="title" type="text"
              class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company"
              placeholder="Title" />
          </div>
          <div class="md:w-full px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
              Content*
            </label>
            <Field as="textarea" name="content" bind="content"
              class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text"
              placeholder="Software Engineer" />
          </div>
        </div>
        <CustomRadio name="status" :options="BadgeOptions" />

        <div class="-mx-3 md:flex mt-2">
          <div class="md:w-full px-3">
            <button
              class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
              Button
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useCreateTask, useFetchById ,useUpdateTask} from "@/composable";
import CustomRadio from "@/components/CustomRadio.vue";
import { BadgeOptions } from "@/constants";
import type TaskModel from "@/models/task.model";

import { Form, Field, useForm } from "vee-validate";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const { handleSubmit, resetForm } = useForm();
const { createTask } = useCreateTask();
const { updateTask } = useUpdateTask();
const route = useRouter();
const { getById } = useFetchById();
let isUpdate = false

onMounted(() => {
  isUpdate = route.currentRoute.value.params.id ? true : false;
  if (isUpdate) {
    const response = getById(route.currentRoute.value.params.id as string);
    resetForm({ values: { title: response?.title, content: response?.content, status: response?.status } });
    return
  }
});

const onSubmit = handleSubmit((values) => {
  if (isUpdate) updateCurrentTask(values as TaskModel)
  else createNewTask(values as TaskModel)

  route.push("/")
});

const updateCurrentTask = (formValues: TaskModel) => {
  const response = updateTask({ ...formValues, id: route.currentRoute.value.params.id.toString() });
  if (response) console.log("ok");
}

const createNewTask = (formValues: TaskModel) => {
  const response = createTask(formValues);
  if (response) console.log("ok");
}

</script>
