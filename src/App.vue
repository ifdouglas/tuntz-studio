<template>
  <div class="app">
    <!-- <Nav /> -->
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Nav from '@/components/Nav.vue';

export default defineComponent({
  name: 'App',
  components: {
    // Nav,
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
  top: 100px;
}
</style>
