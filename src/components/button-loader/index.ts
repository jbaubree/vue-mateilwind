import { App } from 'vue'
import ButtonLoader from './MwButtonLoader.vue'

ButtonLoader.install = (Vue: App) => {
  Vue.component('MwButtonLoader', ButtonLoader)
}

export default ButtonLoader
