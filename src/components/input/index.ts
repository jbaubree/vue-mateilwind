import { App } from 'vue'
import Input from './MwInput.vue'

Input.install = (Vue: App) => {
  Vue.component('MwInput', Input)
}

export default Input
