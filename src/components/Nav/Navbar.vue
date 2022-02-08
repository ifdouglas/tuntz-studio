<template>
  <div class="nav">
    <Navitem href="/logos" title="design" subtitle="de logos" />
    <Navitem href="/sites" title="desenvolvimento" subtitle="de sites" />
    <Navitem href="/apps" title="desenvolvimento" subtitle="de apps" />
    <Navitem href="/instagram-manager" title="gerenciamento" subtitle="de instagram" />
    <Navitem href="/traffic" title="tráfego" subtitle="pago" />
    <Navitem href="/metaverse" title="" subtitle="metaverso" isGlitched />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navitem from './Navitem.vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    Navitem,
  },
});
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  animation: fadeIn 4s ease-in forwards;
}
</style>
