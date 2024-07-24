<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>

    <RouterView />
  </main>
</template>

<style scoped></style>
