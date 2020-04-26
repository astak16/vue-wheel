<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabs-head",
    inject: ["eventBus"],
    created() {
      this.eventBus.$on("update:selected", (name) => {
        console.log(name)
      })
    }
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    >.actions-wrapper{
      margin-left: auto;
    }
  }
</style>