<template>
<section>
  <h1>Os filtros são uma forma de atrair mais pessoas para seu perfil,</h1>
  <h1>o Instagram tem uma aba de explorar para encontrar novos filtros.</h1>
  <h1>Isso possibilita que as pessoas cheguem até seu perfil</h1>
  <h1> e caso se identifiquem com o conteúdo, comecem a te seguir. </h1>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InstagramFilters',
});
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 5px;
  }
}
</style>
