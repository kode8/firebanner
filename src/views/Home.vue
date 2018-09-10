<template>
  <div class="home">
    <h1><span>LinkedIn banners suck?</span> Aint nobody got time for that!<br />
    Instead, create engaging banners (in minutes) <span>like a boss.</span></h1>
    <h2>Choose from over 1000 stunning templates, or <a href="/new"><b>just design your own.</b></a></h2>
    <h2 style="opacity:.5">Great for recruitment drives, company announcements, or call to actions.</h2>
    <p>Your boss will love you!</p>
    <ButtonLink title="Create a banner" href="/" />
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
h1 {
  @include roboto-light();
  span {
    @include roboto-bold();
  }
}
</style>
