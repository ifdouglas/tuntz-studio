<template>
<section>
  <h1>Pacote 1: Logotipo</h1>
  <h3>Criamos a logo que vai representar sua marca.</h3>
  <h1>Pacote 2: Branding</h1>
  <h3>Criamos toda a identidade visual de comunicação da sua marca.</h3>
  <ul>
    <li>Logotipo</li>
    <li>Manual da marca</li>
    <li>Artes para as redes sociais</li>
    <li>Aplicação da paleta de cores</li>
    <li>Templates para postagens</li>
    <li>Templates para postagens</li>
    <li>Projeção da marca em camisetas</li>
    <li>Projeção da marca em canecas</li>
  </ul>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DesignLogos',
});
</script>

<style scoped lang="scss">
section {
  h1 {
    margin: 5px;
    font-weight: 900;
    font-variant: small-caps;
  }

  li {
    font-size: 20px;
  }

  h4 {
    font-variant: small-caps;
  }
}
</style>
