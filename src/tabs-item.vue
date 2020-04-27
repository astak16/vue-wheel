<template>
  <div class="tabs-item" :class="classes" @click="xx"
       :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabs-item",
    inject: ["eventBus"],
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
    data() {
      return {
        active: false
      }
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on("update:selected", (name) => {
          this.active = name === this.name
        })
      }
    },
    methods: {
      xx() {
        if (this.disabled) return
        this.eventBus &&
        this.eventBus.$emit("update:selected", this.name, this)
        this.$emit("click", this)
      }
    }
  }
</script>

<style scoped lang="scss">
  $blue: blue;
  $disable-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.active {
      color: $blue;
      font-weight: bold;
    }

    &.disabled {
      color: $disable-text-color;
      cursor: not-allowed;
    }
  }
</style>