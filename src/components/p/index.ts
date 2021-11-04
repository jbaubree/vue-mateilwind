import { App } from 'vue'
import P from './MwP.vue'

P.install = (Vue: App) => {
  Vue.component('MwP', P)
}

export default P
