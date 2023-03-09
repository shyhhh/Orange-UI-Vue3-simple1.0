<template>
  <div class="docBtn"></div>
  <router-view />
  <span class="leftBox"></span>
  <span class="rightBox"> <span></span> </span>
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 750 ? false : true);
    provide("asideVisible", asideVisible);
    router.afterEach(() => {
      if (width <= 750) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
