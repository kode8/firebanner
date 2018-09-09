<template>
    <header>
        <h1>Firebanner.io 🔥</h1>
    </header>
</template>

<script>

export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $color-primary;
  margin: 0;
  padding: 10px;

  h1 {
    @include roboto-light();
    font-size: 22px;
    margin: 0;
  }
}
</style>
