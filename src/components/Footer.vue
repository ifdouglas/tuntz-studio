<template>
<section>
  <router-link to="/">
    <img :src="HomeSVG" alt="Início" />
  </router-link>
  <router-link to="/">
    <img :src="WhatsAppSVG" alt="WhatsApp" />
  </router-link>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeSVG from '@/assets/images/home.svg';
import WhatsAppSVG from '@/assets/images/whatsapp.svg';

export default defineComponent({
  name: 'Footer',

  setup() {
    return {
      HomeSVG,
      WhatsAppSVG,
    };
  },
});
</script>

<style scoped lang="scss">
  section {
    padding: 10px;
    position: fixed;
    bottom: 20px;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 120px;

    a {
      font-weight: bold;
      color: #ffffff;
      width: 50px;
      height: 50px;

      & > img {
        width: 50px;
        height: 50px;
      }

      &.router-link-exact-active {
        color: #ffffff;
      }

      &:hover {
        animation: puffIn 1s linear forwards;
      }
    }
  }
</style>
