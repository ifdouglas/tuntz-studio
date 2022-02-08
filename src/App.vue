<template>
  <div class="app">
    <Home />
    <Navbar />
    <div class="content">
      <router-view />
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
import Home from '@/views/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer,
    Particles,
    Home,
  },
});
</script>

<style lang="scss">
.app {
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  height: 900px;
}
.content {
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  z-index: 2;
}
</style>
