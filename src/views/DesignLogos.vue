<template>
<section>
  <h4>Existem 2 serviços</h4>
  <h1>Logotipo</h1>
  <h3>Criamos a logo que vai representar sua marca</h3>
  <h1>Identidade Visual</h1>
  <h3>Criamos toda a identidade de comunicação da marca.</h3>
  <ul>
    <li>Logotipo</li>
    <li>Manual da marca</li>
    <li>Aplicação da paleta de cores</li>
    <li>Artes para as redes sociais</li>
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
  }

  li {
    font-size: 20px;
  }
}
</style>
