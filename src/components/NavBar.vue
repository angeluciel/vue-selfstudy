<template>
  <div class="header">
    <div class="header__left">
      <div class="user-data">
        <!--TODO LEVEL E PFP-->
        <img src="./icons/art.jpg" alt="pfp" class="profPic" />
      </div>
      <!--TODO NOME E SETTINGS-->
      <div class="user-info">
        <div class="user-info__name_settings">
          <span class="user-name">Bjorn the Third</span>
          <div class="settings">
            <i class="material-icons">tune</i>
            <p>manage</p>
          </div>
        </div>
        <!--TODO RACE CLASS-->
        <p class="user-race">Half-Orc</p>
        <p class="user-class">Wizard 1 / Barbarian 1</p>
        <p class="user-info__level">level 2</p>
      </div>
    </div>
    <div class="header__right">
      <div class="short-rest">
        <i class="material-icons">
          <!-- SVG IMAGE -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z"
            />
          </svg>
          <!-- END OF SVG IMAGE -->
        </i>
        <p>Short Rest</p>
      </div>
      <div class="long-rest">
        <i class="material-icons">bedtime</i>
        <p>Long Rest</p>
      </div>
      <div class="health">
        <p class="value">21/21</p>
        <p>Health Points</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const userData = useUserStore()

    const { usuario } = storeToRefs(useUserStore)

    return { userData, usuario }
  }
}
</script>

<style lang="scss" scoped>
$background-color: rgba(97, 91, 107, 0.3);
$grey-text: #858594;
$red-inactive: #9d0606;
$red-hover: #ce0e0e;
$text-color-light: #ececec;
$font-size-large: 1.3em;
$font-size-medium: 1em;
$font-size-small: 0.9em;
$color-darken: rgba(0, 0, 0, 0.3);

@mixin flex-center($direction: row, $align: center, $justify: center) {
  display: flex;
  flex-direction: $direction;
  align-items: $align;
  justify-content: $justify;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(97, 91, 107, 0.3);
  color: #6b6a6f;
  padding: 1rem 1rem 0.5rem 1rem;

  &__left {
    @include flex-center(row, center);
    padding-right: 1rem;

    .user-data {
      @include flex-center(column);
      margin: 0 0.2rem auto 0.2rem;
    }

    .profPic {
      box-sizing: border-box;
      width: 6.2rem;
      height: 6.2rem;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid $red-inactive;
      box-shadow: 5px 6px 5px 0px $color-darken;
      transition: 0.2s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.04);
        box-shadow: none;
      }
    }

    .user-info {
      @include flex-center(column, left);
      margin-left: 10px;

      &__level {
        @include flex-center(center);
        color: #ececec;
        text-align: start;
        justify-content: start;
      }

      &__name_settings {
        @include flex-center(row, flex-end);

        .settings {
          @include flex-center(row, center);
          cursor: pointer;
          margin-left: 1rem;
          padding: 0.2rem 0.8rem;
          border-radius: 5px;
          border: 2px solid $red-inactive;
          margin-top: 0.2rem;

          p,
          i.material-icons {
            margin: 0 5px 0 0;
            transition: 0.2s ease;
          }

          &:hover {
            background: rgba(0, 0, 0, 0.3);
            p {
              color: #d4cfcf;
            }
            i.material-icons {
              color: $red-hover;
            }
          }

          p {
            margin: 0 5px 0 0;
            font-size: $font-size-medium;
            font-weight: 100;
          }

          i.material-icons {
            font-size: 1.8em;
            color: $red-inactive;
          }
        }
      }

      span {
        margin: 0;
        font-size: $font-size-large;
        color: $text-color-light;
      }

      .user-race,
      .user-class {
        margin: 0;
        font-size: $font-size-small;
        color: $grey-text;
      }
    }
  }

  &__right {
    @include flex-center(row);

    .short-rest,
    .long-rest {
      @include flex-center(row, center);
      margin-right: 2rem;
      padding: 12px;
      cursor: pointer;
      border: 2px solid $red-inactive;
      color: $grey-text;
      border-radius: 6px;

      p,
      i.material-icons {
        margin: 0 3px 0 0;
        transition: 0.2s ease;
      }

      &:hover {
        background: $color-darken;
        p {
          color: $text-color-light;
        }
        i.material-icons {
          color: $red-hover;
          svg {
            fill: $red-hover;
          }
        }
      }

      p {
        margin: 0 5px 0 0;
        font-size: $font-size-medium;
        font-weight: normal;
      }

      i.material-icons {
        font-size: 1.5em;
        color: $red-inactive;

        svg {
          fill: $red-inactive;
        }
      }
    }
  }
}

.health {
  @include flex-center(column, center);
  padding: 12px 20px;
  background: linear-gradient(265.27deg, #0000 20.55%, $red-inactive 94.17%);
  background-color: $red-inactive;
  border-radius: 6px;
  cursor: pointer;
  color: whitesmoke;
  box-shadow: 5px 6px 5px 0px $color-darken;

  p {
    margin: 0 0 5px 0;
    font-size: $font-size-small;
    color: $grey-text;
    font-weight: bold;
  }

  .value {
    font-size: $font-size-large;
    font-weight: bold;
    color: $text-color-light;
  }

  &:hover {
    background-color: $red-hover;
    color: #fff;
  }
}
</style>
