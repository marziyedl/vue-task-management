<template>
  <div class="columns is-multiline">
    <div class="column is-6">
      <legend>{{ name }}</legend>
      <p class="m-2">
        <label class="radio mx-2" v-for="option in options" :key="option.value">
          <input :name="name" :value="option.value" type="radio" :checked="option.value === checked"
            v-model="checked" @change="handleChange(option.value)" />
          {{ option.label }}
        </label>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type BadgeModel } from "@/models/badge.model";
import { useField } from "vee-validate";

const props = defineProps<{
  options: { [key: string]: { value: BadgeModel, label: string } },
  name: string,
}>();

const { handleChange, value: checked } = useField(props.name);
</script>
