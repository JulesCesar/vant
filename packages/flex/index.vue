<template>
  <div class="van-flex" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-flex',

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
