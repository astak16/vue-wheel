import Row from "../src/row";

const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'
import Col from "../src/col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置 position.', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="bottom" ref="a">
        <template slot="content">
        弹出内容
        </template>
        <button>点我</button>
      </g-popover>
    `

    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector("button").click()
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains("position-bottom")).to.be.true
      done()
    })
  })
})