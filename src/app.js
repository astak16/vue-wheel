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
import Toast from "./toast"
import plugin from "./plugin";
import Tabs from "./tabs"
import TabsHead from "./tabs-head"
import TabsBody from "./tabs-body"
import TabsItem from "./tabs-item"
import TabsPane from "./tabs-pane"
import Popover from "./popover"

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
Vue.component("g-tabs", Tabs)
Vue.component("g-tabs-head", TabsHead)
Vue.component("g-tabs-body", TabsBody)
Vue.component("g-tabs-item", TabsItem)
Vue.component("g-tabs-pane", TabsPane)
Vue.component("g-popover", Popover)

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: "hi",
    selected: "sports"
  },
  created(){
    // this.showToast()
  },
  methods: {
    x(){

    },
    inputChange(e) {
      console.log(e)
    },
    showToast1(){
      this.showToast("top")
    },
    showToast2(){
      this.showToast("middle")
    },
    showToast3(){
      this.showToast("bottom")
    },
    showToast(position) {
      this.$toast("你的智商需要充值", {
        position,
        enableHtml: false,
        closeButton: {
          text: "已充值",
          callback() {
            console.log("他说已经充值了")
          }
        },
        autoClose: 3,
        // autoCloseDelay: 3
      })
    }
  }
})