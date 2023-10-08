<template>
  <form class="flex w-6/12 mx-auto flex-col gap-4" @submit="onSubmit">
    <label class="block text-gray-700 text-sm font-bold" for="title">
      Title
    </label>
    <Field name="title" bind="title" type="text"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label class="block text-gray-700 text-sm font-bold" for="title">
      Content
    </label>
    <Field as="textarea" name="content" bind="content"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></Field>
      <CustomRadio name="status" :options="BadgeOptions" />
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       type="submit"
        >
        Create
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Cancel
      </a>
    </div>
  </form>
</template>
<script setup lang="ts">
import useCreateTask from "@/composable/useCreateTask";
import CustomRadio from "@/components/CustomRadio.vue"
import { BadgeOptions } from "@/constants/BadgeOptions"
import type TaskProps from "@/models/task.model";

import { Form, Field, useForm } from "vee-validate";


const { handleSubmit } = useForm();
const { createTask } = useCreateTask();

const onSubmit = handleSubmit((values) => {
  createTask(values as TaskProps);

});
</script>
