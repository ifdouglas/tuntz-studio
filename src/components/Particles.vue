<template>
  <div class="animation">
    <div class="particle particle-1"></div>
    <div class="particle particle-2"></div>
    <div class="particle particle-3"></div>
    <div class="particle particle-4"></div>
  </div>

  <div class="page">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Paticles',
});
</script>

<style scoped lang="scss">
$color-bg: #111;
$color-particle: #fff;
$spacing: 2560px;
$time-1: 60s;
$time-2: 120s;
$time-3: 180s;
$time-4: 600s;

@function particles($max) {
  $val: 0px 0px $color-particle;

  @for $i from 1 through $max {
    $val: #{$val},
    random($spacing)+px random($spacing)+px $color-particle;
  }
  @return $val;
}

@mixin particles($max) {
  box-shadow: particles($max);
}

.animation {
  position: fixed;
  animation: smoothFadeIn 6s ease-in forwards;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.particle,
.particle:after {
  background: transparent;
}

.particle:after {
  position: absolute;
  content: "";
  top: $spacing;
}

.particle-1 {
  animation: animParticle $time-1 linear infinite;
  @include particles(600);
  height: 1px;
  width: 1px;
}

.particle-1:after {
  @include particles(600);
  height: 1px;
  width: 1px;
}

.particle-2 {
  animation: animParticle $time-2 linear infinite;
  @include particles(200);
  height: 2px;
  width: 2px;
}

.particle-2:after {
  @include particles(200);
  height: 2px;
  width: 2px;
}

.particle-3 {
  animation: animParticle $time-3 linear infinite;
  @include particles(100);
  height: 3px;
  width: 3px;
}

.particle-3:after {
  @include particles(100);
  height: 3px;
  width: 3px;
}

.particle-4 {
  animation: animParticle $time-4 linear infinite;
  @include particles(400);
  height: 1px;
  width: 1px;
}

.particle-4:after {
  @include particles(400);
  height: 1px;
  width: 1px;
}

.page {
  position: relative;
  z-index: 2;
}

@keyframes animParticle {
  from { transform: translateY(0px); }
  to   { transform: translateY($spacing * -1); }
}
</style>
