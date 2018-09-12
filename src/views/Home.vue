<template>
  <div class="home">
    <div class="introduction">
      <h1><span>Effortlessly</span>
        create stunning LinkedIn banners in minutes,
        <span>like a boss.</span>
      </h1>
      <h2>Choose from over 1000 engaging templates, or
        <a href="/new"><span>create your own.</span></a>
      </h2>
      <h2 style="opacity:.5">Great for recruitment ads, company announcements,
        or simple call to actions.</h2>
    </div>
    <ButtonLink title="Get Started" href="/" class="mt-50-sm" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import ButtonLink from '@/components/ButtonLink.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    ButtonLink,
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  h1, h2 {
    @include roboto-light();
    font-size: calc(20px + 1vw);
    span {
      @include roboto-bold();
    }
  }
}
</style>
