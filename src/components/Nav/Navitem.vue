<template>
  <router-link :class="{ link: true, glitch: isGlitched }" :to=href>
    <h2 class="title">{{title}}</h2>
    <h2 class="subtitle">{{subtitle}}</h2>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navitem',
  props: {
    href: String,
    title: String,
    subtitle: String,
    isGlitched: Boolean,
  },
});
</script>

<style lang="scss">
  .link {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    margin: 0 20px;

    &.glitch {
      animation: flicker 1.5s infinite alternate, glitch 4s linear infinite;

      h2 {
        color: #fff;
      }
    }

    h2 {
      margin: 0;
      color: #FF461E;
      width: 100%;
      min-height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 15px;
    }

    &.router-link-exact-active {
      color: #ffffff;
      scale: 1;
      animation: none;

      & > h2:nth-child(2) {
        color: #241B53;
        background-color: #FF461E;
      }
    }

    &:hover {
      animation: puffIn 1s linear forwards;
    }
  }
</style>
