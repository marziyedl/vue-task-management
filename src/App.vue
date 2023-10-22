<script setup lang="ts">
import "./style.css"
import Header from "@/layout/Header.vue"
import Footer from "@/layout/Footer.vue"
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>
