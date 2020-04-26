<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabs-item",
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    inject: ["eventBus"],
    created() {
      this.eventBus.$on("update:selected", (name) => {
        console.log(name)
      })
    },
    methods: {
      xx() {
        this.eventBus.$emit("update:selected", this.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-item {

  }
</style>