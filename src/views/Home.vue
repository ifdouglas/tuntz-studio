<template>
  <a href="/apps" :class="{ 'home': true, 'scale-down': false }">
    <img class="tuntz-logo" :src="TuntzLogoSVG" alt="TUNTZ Logo" />
    <img class="studio-logo" :src="StudioLogoSVG" alt="Studio Logo" />
  </a>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import TuntzLogoSVG from '@/assets/images/tuntz-logo.svg';
import StudioLogoSVG from '@/assets/images/studio-logo.svg';

export default defineComponent({
  name: 'Home',

  setup() {
    const currentRoute = computed(() => {
      const route = useRoute().name;
      // eslint-disable-next-line no-console
      console.log('route', route);
      return route;
    });

    return {
      TuntzLogoSVG,
      StudioLogoSVG,
      currentRoute,
    };
  },
});
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 20px;
    height: 155px;
    z-index: 3;

    img {
      width: 250px;
      opacity: 0;
    }
  }

  .tuntz-logo {
    animation: opacityPuffIn 1s linear forwards;
    height: fit-content;
    z-index: 2;
  }

  .studio-logo {
    position: relative;
    animation: 1s boingInUp 1s linear forwards;
    z-index: 1;
    top: -30px;
  }
</style>
