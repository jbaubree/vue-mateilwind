import { App } from 'vue'
import Datepicker from './MwDatepicker.vue'

Datepicker.install = (Vue: App) => {
  Vue.component('MwDatepicker', Datepicker)
}

export default Datepicker
