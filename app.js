import Vue from "vue"
import Button from "./src/button"
import Icon from "./src/icon"
import ButtonGroup from "./src/g-button-group"

Vue.component("g-button", Button)
Vue.component("g-icon", Icon)
Vue.component("g-button-group", ButtonGroup)
new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
})