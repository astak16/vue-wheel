<template>
  <div class="tabs-head">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabs-head",
    inject:["eventBus"],
    created(){
      this.eventBus.$on("update:selected", (name) => {
        console.log(name)
      })
    }
  }
</script>

<style scoped lang="scss">
.tabs-head{

}
</style>