<template>
  <div>
      <a :href="href">{{ title }}</a>
  </div>
</template>

<script>
export default {
  props: ['title', 'href'],
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  @include roboto-bold();
  box-shadow: 2px 2px 11px -4px rgba(0,0,0,0.55);
  text-shadow: 1px 1px darken($color-secondary,10%);
  padding: 15px 20px;
  font-size: 20px;
  background-color: $color-secondary;
  color: $white;
  border-radius: 4px;
  transition: background-color .2s;

  &:hover {
    background-color: darken($color-secondary,8%);
  }
}
</style>
