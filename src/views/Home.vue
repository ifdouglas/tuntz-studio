<template>
  <div class="home">
    <img :src="logo" alt="TUNTZ Studio Logo" />
    <Particles />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Particles from '@/components/Particles.vue'; // @ is an alias to /src
import logo from '@/assets/images/logo.svg';

export default defineComponent({
  name: 'Home',
  components: {
    Particles,
  },

  setup() {
    return {
      logo,
    };
  },
});
</script>
