import { App } from 'vue'
import Badge from './MwBadge.vue'

Badge.install = (Vue: App) => {
  Vue.component('MwBadge', Badge)
}

export default Badge
