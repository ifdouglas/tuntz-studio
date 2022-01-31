<template>
  <div class="nav">
    <router-link to="/traffic" active-class="active">
      <img :src="PaidTrafficSVG" alt="Tráfego Pago" />
    </router-link>
    <router-link to="/instagram-filters" active-class="active">
      <img :src="InstagramFiltersSVG" alt="Filtros para Instagram" />
    </router-link>
    <router-link to="/instagram-manager" active-class="active">
      <img :src="InstagramManagerSVG" alt="Gerenciamento de Instagram" />
    </router-link>
    <router-link to="/logos" active-class="active">
      <img :src="DesignLogosSVG" alt="Design de Logos" />
    </router-link>
    <router-link to="/sites" active-class="active">
      <img :src="CreateSitesSVG" alt="Criação de Sites" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PaidTrafficSVG from '@/assets/images/paid-traffic.svg';
import DesignLogosSVG from '@/assets/images/design-logos.svg';
import CreateSitesSVG from '@/assets/images/create-sites.svg';
import InstagramFiltersSVG from '@/assets/images/instagram-filters.svg';
import MarketingDigitalSVG from '@/assets/images/digital-marketing.svg';
import InstagramManagerSVG from '@/assets/images/instagram-manager.svg';

export default defineComponent({
  name: 'Navbar',

  setup() {
    return {
      PaidTrafficSVG,
      DesignLogosSVG,
      CreateSitesSVG,
      InstagramFiltersSVG,
      MarketingDigitalSVG,
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
  animation: fadeIn 4s ease-in forwards;

  a {
    font-weight: bold;
    color: #ffffff;
    margin: 10px;
    scale: .8;

    &.router-link-exact-active {
      color: #ffffff;
      scale: 1;
    }

    &:hover {
      animation: puffIn 1s linear forwards;
    }
  }
}
</style>
