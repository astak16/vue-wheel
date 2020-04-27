<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line"></div>
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
  $blue: blue;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;

    > .line {
      position: absolute;
      bottom: 0;
      width: 100px;
      border-bottom: 1px solid $blue;
    }

    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>