<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: { RouterLink, RouterView },
  setup() {}
}
</script>

<template>
  <main>
    <header>
      <div class="header__left">
        <RouterLink to="/" class="material-icons">home</RouterLink>
        <div class="search">
          <i class="material-icons">search</i>
          <input type="text" placeholder="Search Anything ..." />
        </div>
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
  background: rgba(23, 21, 26, 0.2);
  color: #6b6a6f;
  padding: 1rem 1rem 0.5rem 1rem;

  .header__left {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 12px;

    .search {
      padding: 0 12px;
      display: flex;
      justify-content: center;

      input {
        background: none;
        border: none;
        color: grey;
      }
    }
  }
}
</style>
