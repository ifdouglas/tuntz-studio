<template>
  <div class="wrapper">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hive',
});
</script>

<style lang="scss" scoped>
  $particles: 62; // has to match nodes in dom
  $particleSize: 8px;
  $radius: 80;
  $lapDuration: 3s;

  html, body {
    overflow: hidden;
    background: #3e6fa3;
  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;

    @include perspective(500px);
  }

  i {
    display: block;
    position: absolute;
    width: $particleSize;
    height: $particleSize;
    border-radius: $particleSize;
    opacity: 0;
    background: rgba(255,255,255,0.5);
    box-shadow: 0px 0px 10px rgba(255,255,255,1);

    animation-name: spin;
    animation-duration: $lapDuration;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @for $i from 1 through $particles {
    i:nth-child(#{$i}) {
      $angle: ( $i / $particles ) * 720;

      @include transform(
        rotate( #{$angle}deg )
        translate3d( #{$radius}px, 0, 0 )
      );

      animation-delay: $i * ($lapDuration / $particles);
    }
  }

  @keyframes spin {
    from {
      opacity: 0.0;
    }
    to {
      opacity: 0.6;
      transform: translate3d(-$particleSize/2, -$particleSize/2, 570px);
    }
  }

  #black {
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    &:after { content: 'Black & white'; }
  }

  #black:target {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #111;
    cursor: default;
    &:after { content: ''; }
  }
</style>
