<template>
  <div class="nav">
    <router-link to="/smart">
      <h2>{}</h2>
      <h2></h2>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navitem',

  setup() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
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
</style>
