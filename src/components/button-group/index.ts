import { App } from 'vue'
import ButtonGroup from './MwButtonGroup.vue'

ButtonGroup.install = (Vue: App) => {
  Vue.component('MwButtonGroup', ButtonGroup)
}

export default ButtonGroup
