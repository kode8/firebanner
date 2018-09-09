<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: 'App',
  props: {
    msg: String,
  },
  components: {
    Header,
  },
});
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $white;
  }
</style>
