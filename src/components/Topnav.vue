<template>
  <div>
    <div class="topnav" ref="topnav">
      <router-link ref="topLogo" to="/" class="logo">
        <svg class="icon">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </router-link>
      <ul class="menu">
        <li>
          <router-link to="/doc">文档</router-link>
        </li>
      </ul>
      <svg
        v-if="toggleMenuVisible"
        @click="toggleMenu"
        class="toggleAside icon"
      >
        <use xlink:href="#icon-menu" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref, onMounted, onUnmounted, ref, watchEffect } from "vue";
export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const topnav = ref<HTMLDivElement>(null);
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    const handleScroll = () => {};
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return {
      toggleMenu,
      topnav,
    };
  },
};
</script>

<style lang="scss" scoped>
$li-cor: rgb(38, 64, 101);
$cor-font: #3178c6;
.topnav {
  display: flex;
  padding: 0 1.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  background: #fff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);

  > .logo {
    max-width: 6em;
    margin-right: auto;
    margin-left: 100px;

    > svg {
      width: 48px;
      height: 48px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin-right: 100px;

    > li {
      margin: 0 1em;
      color: $li-cor;
      a {
        font-size: 20px;
        text-decoration: none;
        padding: 6px 9px;

        &:hover {
          border-bottom: 1px solid $cor-font;
          transition: border-bottom 150ms;
        }
      }
    }
  }

  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 750px) {
    position: fixed;
    padding: 0;
    padding-top: 5px;
    background-color: #fff;

    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;

      > svg {
        width: 2.2em;
        height: 2.2em;
      }
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
