import Toast from "./toast"

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      const Constrictor = Vue.extend(Toast)
      const toast = new Constrictor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}