<template>
  <div class="home">
    <img class="tuntz-logo" :src="TuntzLogoSVG" alt="TUNTZ Logo" />
    <img class="studio-logo" :src="StudioLogoSVG" alt="Studio Logo" />
    <!-- <img class="tech-dev-logo" :src="TechDevLogoSVG" alt="Tecnologia e Programação Logo" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TuntzLogoSVG from '@/assets/images/tuntz-logo.svg';
import StudioLogoSVG from '@/assets/images/studio-logo.svg';
// import TechDevLogoSVG from '@/assets/images/tech-dev-logo.svg';

export default defineComponent({
  name: 'Home',

  setup() {
    return {
      TuntzLogoSVG,
      StudioLogoSVG,
      // TechDevLogoSVG,
    };
  },
});
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .tuntz-logo {
    opacity: 0;
    animation: opacityPuffIn 1s linear forwards;
    height: fit-content;
    z-index: 2;
  }

  .studio-logo {
    opacity: 0;
    position: relative;
    animation: 1s boingInUp 1s linear forwards;
    z-index: 1;
    top: -55px;
  }

  .tech-dev-logo {
    opacity: 0;
    position: relative;
    animation: 1s boingInUp 2s linear forwards, 2s glitch 4s linear infinite;
    z-index: 1;
    top: -50px;
  }
</style>
