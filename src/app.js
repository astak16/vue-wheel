import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./g-button-group"
import Input from "./input"
import Row from "./row"
import Col from "./col"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"
import Sider from "./sider"
import Layout from "./layout"
import plugin from "./plugin";
import Toast from "./toast"

Vue.component("g-button", Button)
Vue.component("g-icon", Icon)
Vue.component("g-button-group", ButtonGroup)
Vue.component("g-input", Input)
Vue.component("g-row", Row)
Vue.component("g-col", Col)
Vue.component("g-header", Header)
Vue.component("g-content", Content)
Vue.component("g-footer", Footer)
Vue.component("g-sider", Sider)
Vue.component("g-layout", Layout)
Vue.component("g-toast", Toast)
Vue.use(plugin)
new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: "hi"
  },
  created(){
    // this.showToast()
  },
  methods: {
    inputChange(e) {
      console.log(e)
    },
    showToast() {
      this.$toast("你的智商需要充值", {
        position: "bottom",
        // enableHtml: false,
        closeButton: {
          text: "已充值",
          callback() {
            console.log("他说已经充值了")
          }
        },
        autoClose: true,
        autoCloseDelay: 3
      })
    }
  }
})