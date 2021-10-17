<template>
  <div class="nav">
    <router-link to="/smart">
      <img :src="SmartHomeSVG" alt="Casa Inteligente" />
    </router-link>
    <router-link to="/apps">
      <img :src="CreateAppsSVG" alt="Criação de Apps" />
    </router-link>
    <router-link to="/sites">
      <img :src="CreateSitesSVG" alt="Criação de Sites" />
    </router-link>
    <router-link to="/instagram">
      <img :src="InstaFiltersSVG" alt="Filtros para Instagram" />
    </router-link>
    <router-link to="/marketing">
      <img :src="DigitalMarketingSVG" alt="Marketing Digital" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SmartHomeSVG from '@/assets/images/smart-home.svg';
import CreateAppsSVG from '@/assets/images/create-apps.svg';
import CreateSitesSVG from '@/assets/images/create-sites.svg';
import InstaFiltersSVG from '@/assets/images/insta-filters.svg';
import DigitalMarketingSVG from '@/assets/images/digital-marketing.svg';

export default defineComponent({
  name: 'Menu',

  setup() {
    return {
      SmartHomeSVG,
      CreateAppsSVG,
      CreateSitesSVG,
      InstaFiltersSVG,
      DigitalMarketingSVG,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;
  position: fixed;
  top: 30px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1000px;

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
}
</style>
