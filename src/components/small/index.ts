import { App } from 'vue'
import Small from './MwSmall.vue'

Small.install = (Vue: App) => {
  Vue.component('MwSmall', Small)
}

export default Small
