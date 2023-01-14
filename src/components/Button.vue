<template>
  <router-link class="button" :to=href>
    <h2 class="title">{{title}}</h2>
    <h2 class="subtitle">{{subtitle}}</h2>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    href: String,
    title: String,
    subtitle: String,
  },
});
</script>

<style lang="scss">
  .button {
    width: 200px;
  }

  .title {
    color: #FF461E;
  }

  .subtitle {
    color: #241B53;
    background-color: #FF461E;
  }
</style>
