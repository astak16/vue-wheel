<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: "icon",
    props:["name"]
  }
</script>

<style lang="scss" scoped>
  .g-icon {
    height: 1em;
    width: 1em;
  }
</style>