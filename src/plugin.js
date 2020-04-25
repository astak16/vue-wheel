import Toast from "./toast"

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) currentToast.close()
      currentToast = createToast({Vue, message, propsData: toastOptions})
    }
  }
}

function createToast({Vue, message, propsData}) {
  const Constrictor = Vue.extend(Toast)
  const toast = new Constrictor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}