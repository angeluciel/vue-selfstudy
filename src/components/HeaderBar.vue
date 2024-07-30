<template>
  <header>
    <div class="profile">
      <img src="./icons/art.jpg" alt="pfp" class="pfp" />
      <div class="profile__info">
        <h2>Bjorn the Third</h2>
        <div class="profile__info__race">
          <p>Half-Orc</p>
          <p>Wizard / Barbarian</p>
        </div>
        <p class="profile__info__level">Level 2</p>
      </div>
      <div class="manage">
        <button class="manageButton">
          <i class="material-icons">tune</i>
          <p>Manage</p>
        </button>
      </div>
    </div>
    <div class="rest">
      <button class="shortRest">
        <i class="material-symbols-outlined">local_fire_department</i>
        <p>Short Rest</p>
      </button>
      <button class="longRest">
        <i class="material-symbols-outlined">dark_mode</i>
        <p>Long Rest</p>
      </button>
      <button class="stylePage">
        <i class="material-symbols-outlined">swords</i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
$text-inactive: #2e2e2e;
$text-active: #ececec;
$red-inactive: #9d0606;
$red-active: #bb1919;
$text-greytone: #858594;
$bg-color: #2e2e2e;
$bg-color-grey: #484848;
$bg-main-color: #252626;

@mixin flex-center($direction: row, $align: center, $justify: center) {
  display: flex;
  flex-direction: $direction;
  align-items: $align;
  justify-content: $justify;
}

@mixin buttonHover() {
  background-color: rgba(0, 0, 0, 0.5);

  p {
    color: white;
  }
}

header {
  @include flex-center(center);
  justify-content: space-between;
  background-color: $bg-main-color;
  padding: 1rem;
}

.profile {
  display: flex;
  align-items: center;
  text-align: start;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid $red-inactive;
    margin-right: 1rem;
  }

  &__info {
    @include flex-center(column);
    align-items: start;
    text-align: start;
    color: #d4d4d4;

    h2 {
      margin: 0;
      font-size: 1.5rem;
      color: white;
    }

    &__level {
      color: white;
    }

    &__race {
      @include flex-center(column);
      p {
        margin: 0;
        font-size: 0.9rem;
        color: $bg-color-grey;
      }
    }
  }

  .manage {
    @include flex-center(center);
    margin-left: 1rem;

    .manageButton {
      @include flex-center(center);
      background: none;
      border: 2px solid $red-inactive;
      border-radius: 20px;
      color: $text-greytone;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: background-color 0.3s ease;

      i {
        margin-right: 0.5rem;
        color: $red-inactive;
        transition: 0.1s ease;
      }

      &:hover {
        @include buttonHover();
      }
    }
  }
}

.rest {
  @include flex-center(center);

  button {
    @include flex-center(center, center);
    background: none;
    border: 2px solid $red-inactive;
    border-radius: 5px;
    color: $text-greytone;
    cursor: pointer;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;

    i {
      margin-right: 0.5rem;
      color: $red-inactive;
    }

    &:hover {
      @include buttonHover();
    }

    .stylePage {
      border-radius: 50%;
      border: none;
      padding: 0.5rem;

      i {
        color: white !important;
      }
    }
  }
}

// icons
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}
</style>
