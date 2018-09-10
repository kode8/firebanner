<template>
    <header>
        <h1>{{ title }} 🔥</h1>
    </header>
</template>

<script>

export default {
  data() {
    return {
      title: 'firebanner.io',
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $color-primary;
  border-bottom: 1px solid darken($color-primary,3%);
  margin: 0;
  padding: 10px 15px;

  h1 {
    @include roboto-light();
    font-size: 22px;
    margin: 0;
  }
}
</style>
