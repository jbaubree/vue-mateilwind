import { App } from 'vue'
import Select from './MwSelect.vue'

Select.install = (Vue: App) => {
  Vue.component('MwSelect', Select)
}

export default Select
