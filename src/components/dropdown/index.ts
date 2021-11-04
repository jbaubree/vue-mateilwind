import { App } from 'vue'
import Dropdown from './MwDropdown.vue'

Dropdown.install = (Vue: App) => {
  Vue.component('MwDropdown', Dropdown)
}

export default Dropdown
