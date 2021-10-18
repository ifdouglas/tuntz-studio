<template>
  <div class="app">
    <Navbar />
    <div class="content">
      <router-view/>
    </div>
    <Footer />
    <Particles />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Particles from '@/components/Particles.vue';
import Navbar from '@/components/Nav/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer,
    Particles,
  },
});
</script>

<style lang="scss">
.app {
  display: flex;
  justify-content: center;
  width: 900px;
  height: 900px;
}

.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
</style>
