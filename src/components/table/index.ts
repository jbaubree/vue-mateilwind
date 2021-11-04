import { App } from 'vue'
import Table from './MwTable.vue'

Table.install = (Vue: App) => {
  Vue.component('MwTable', Table)
}

export default Table
