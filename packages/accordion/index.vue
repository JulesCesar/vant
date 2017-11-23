<template>
  <div class="van-accordion" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-accordion',

  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    style() {
      const margin = `-${Number(this.gutter) / 2}px`;
      return this.gutter
        ? { marginLeft: margin, marginRight: margin }
        : {};
    }
  }
};
</script>
