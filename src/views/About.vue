<template>
<section>
  <Particles>
    <h1>This is an about page</h1>
  </Particles>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Particles from '@/components/Particles.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Particles,
  },
});
</script>

<style scoped lang="scss">
  section {
    width: 100%;
    height: 100%;
  }
</style>
