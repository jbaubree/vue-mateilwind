import { App } from 'vue'
import Button from './MwButton.vue'

Button.install = (Vue: App) => {
  Vue.component('MwButton', Button)
}

export default Button
