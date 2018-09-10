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

</style>
