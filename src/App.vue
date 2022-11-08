<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>app</h1>
  <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">about</RouterLink>
  </div>
  <br />
  <RouterView />
</template>

<style scoped>
</style>
