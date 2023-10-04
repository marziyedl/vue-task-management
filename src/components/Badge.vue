<template>
  <div :class="BadgeModel[props.type] + ' text-white p-1 rounded-md'">
    <small> {{ props.type }}</small>
  </div>
</template>

<script setup lang="ts">
import { type BadgePropsModel, BadgeModel } from "../models/badge.model";

const props = defineProps<{ type: BadgePropsModel }>();
</script>
