<template>
  <div class="nav">
    <router-link to="/traffic">
      <img :src="PaidTrafficSVG" alt="Tráfego Pago" />
    </router-link>
    <router-link to="/instagram">
      <img :src="InstagramFiltersSVG" alt="Filtros para Instagram" />
    </router-link>
    <router-link to="/marketing">
      <img :src="InstagramManagerSVG" alt="Marketing Digital" />
    </router-link>
    <router-link to="/apps">
      <img :src="CreateAppsSVG" alt="Criação de Apps" />
    </router-link>
    <router-link to="/sites">
      <img :src="CreateSitesSVG" alt="Criação de Sites" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PaidTrafficSVG from '@/assets/images/paid-traffic.svg';
import CreateAppsSVG from '@/assets/images/create-apps.svg';
import CreateSitesSVG from '@/assets/images/create-sites.svg';
import InstagramFiltersSVG from '@/assets/images/instagram-filters.svg';
import InstagramManagerSVG from '@/assets/images/instagram-manager.svg';

export default defineComponent({
  name: 'Navbar',

  setup() {
    return {
      PaidTrafficSVG,
      CreateAppsSVG,
      CreateSitesSVG,
      InstagramFiltersSVG,
      InstagramManagerSVG,
    };
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
  flex-wrap: wrap;
  width: 100%;
  animation: fadeIn 4s linear forwards;

  a {
    font-weight: bold;
    color: #ffffff;
    margin: 10px;

    &.router-link-exact-active {
      color: #ffffff;
    }

    &:hover {
      animation: puffIn 1s linear forwards;
    }
  }
}
</style>
