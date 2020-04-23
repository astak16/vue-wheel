<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validator = (value) => {
    const keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!["span", "offset"].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: "col1",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      ipad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator},
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        const {span, offset, ipad, narrowPc, pc, widePc} = this
        return [
          ...this.createClass({span, offset}),
          ...this.createClass(ipad, 'ipad-'),
          ...this.createClass(narrowPc, 'narrow-pc-'),
          ...this.createClass(pc, "pc-"),
          ...this.createClass(widePc, "wide-px")
        ]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    },
    methods: {
      createClass(obj, str = '') {
        if (!obj) return []
        const array = []
        if (obj.span) {
          array.push(`col-${str}${obj.span}`)
        }
        if (obj.offset) {
          array.push(`offset-${str}${obj.offset}`)
        }
        return array
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }

    @media (min-width: 577px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n/24)*100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n/24)*100%;
        }
      }
    }
    @media (min-width: 769px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n/24)*100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n/24)*100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n/24)*100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n/24)*100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n/24)*100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n/24)*100%;
        }
      }
    }
  }
</style>