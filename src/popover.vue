<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrap" v-if="visible" ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "popover",
    data() {
      return {
        visible: false
      }
    },
    mounted() {

    },
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        const {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      onClickDocument(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target ||
            this.$refs.popover.contains(e.target))) return

        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target ||
            this.$refs.contentWrapper.contains(e.target))) return
        this.close()
      },
      open() {
        this.visible = true
        setTimeout(() => {
          this.positionContent()
          document.addEventListener("click", this.onClickDocument)
        }, 0)
      },
      close() {
        this.visible = false
        document.removeEventListener("click", this.onClickDocument)
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrap {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
    background-color: rgba(255, 255, 255, 1);
    transform: translateY(-100%);
    padding: .5em 1em;
    margin-top: -16px;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: "";
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
    }

    &::before {
      border-top-color: black;
      top: 100%;
    }

    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }

</style>