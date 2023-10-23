<template>
  <div :class="BadgeOptions[props.type].color + ' text-white p-1 rounded-md'">
    <small> {{ BadgeOptions[props.type].label }}</small>
  </div>
</template>

<script setup lang="ts">
import { BadgeOptions } from "@/constants/BadgeOptions";
import { type BadgeModel } from "../models/badge.model";

const props = defineProps<{ type: BadgeModel }>();
</script>
