<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <header>
      <div class="header__left">
        <RouterLink to="/" class="material-icons">home</RouterLink>
      </div>
      <div class="header__right">
        <RouterLink to="/about" class="material-icons">menu</RouterLink>
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(23, 21, 26, 0.3);
  color: #6b6a6f;
  padding: 1rem 1rem 0.5rem 1rem;
  border-bottom: 2px solid red;
}
</style>
