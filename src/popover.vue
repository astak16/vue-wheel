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
        console.log(this.$refs.popover)
        console.log(this.$refs.popover === e.target)
        console.log(this.$refs.popover.contains(e.target))
        console.log(e.target)
        if (this.$refs.popover &&
          (this.$refs.contentWrapper === e.target ||
            this.$refs.contentWrapper.contains(e.target))) return
        this.close()
      },
      open() {
        this.visible = true
        setTimeout(() => {
          this.positionContent()
          console.log(1)
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

  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrap {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    transform: translateY(-100%);
  }

</style>