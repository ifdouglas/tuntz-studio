<template>
<section>
  <a href="/">
    <img :src="HomeSVG" alt="Início" />
  </a>
  <a href="https://api.whatsapp.com/send?phone=+55999551889">
    <img :src="WhatsAppSVG" alt="WhatsApp" />
  </a>
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
