<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from "vue"

  export default {
    name: "tabs",
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: "horizontal",
        validator(value) {
          return ["horizontal", "vertical"].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn("tabs 的子组件应该是 tabs-head 和 tabs-nav，但你没有写子组件")
      }
      this.$children.forEach(vm => {
        if (vm.$options.name === "tabs-head") {
          vm.$children.forEach(childVm => {
            if (childVm.$options.name === "tabs-item" && childVm.name === this.selected) {
              this.eventBus.$emit("update:selected", this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .tabs {

  }
</style>