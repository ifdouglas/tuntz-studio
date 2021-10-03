<template>
  <div class="nav">
    <router-link to="/">
      <img :src="SmartHomeSVG" alt="Smart Home Logo" />
    </router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SmartHomeSVG from '@/assets/images/smart-home.svg';

export default defineComponent({
  name: 'Menu',

  setup() {
    return {
      SmartHomeSVG,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;
  position: fixed;
  top: 30px;
  z-index: 2;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
