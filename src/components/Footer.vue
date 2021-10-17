<template>
<section>
  <router-link to="/">
    <img :src="HomeSVG" alt="Início" />
  </router-link>
  <router-link to="/about">
    <img :src="InfoSVG" alt="About" />
  </router-link>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeSVG from '@/assets/images/home.svg';
import InfoSVG from '@/assets/images/info.svg';

export default defineComponent({
  name: 'Footer',

  setup() {
    return {
      HomeSVG,
      InfoSVG,
    };
  },
});
</script>

<style scoped lang="scss">
  section {
    padding: 30px;
    position: fixed;
    bottom: 30px;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 120px;

    a {
      font-weight: bold;
      color: #ffffff;

      &.router-link-exact-active {
        color: #ffffff;
      }

      &:hover {
        animation: puffIn 1s linear forwards;
      }
    }
  }
</style>
