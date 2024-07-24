<template>
  <div class="header">
    <div class="header-left">
      <img src="./icons/art.jpg" alt="pfp" class="profPic" />
      <div class="user-info">
        <h1 class="user-name">Sigma Da Bahia</h1>
        <p class="user-race">Dragonborn</p>
        <p class="user-class">Warrior 1</p>
      </div>
    </div>
    <div class="header-right">
      <div class="short-rest">
        <p>Short Rest</p>
        <i class="material-icons">hotel</i>
      </div>
      <div class="long-rest">
        <p>Long Rest</p>
        <i class="material-icons">bedtime</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .header-left {
    display: flex;
    align-items: center;

    .profPic {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user-info {
      margin-left: 10px;

      .user-name {
        margin: 0;
      }

      .user-race,
      .user-class {
        margin: 0;
        font-size: 0.9em;
        color: gray;
      }
    }
  }

  .header-right {
    display: flex;

    .short-rest,
    .long-rest {
      display: flex;
      align-items: center;
      margin-left: 20px;

      p {
        margin: 0 5px 0 0;
      }

      i.material-icons {
        font-size: 24px;
      }
    }
  }
}
</style>
