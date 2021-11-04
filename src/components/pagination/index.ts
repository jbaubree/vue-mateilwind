import { App } from 'vue'
import Pagination from './MwPagination.vue'

Pagination.install = (Vue: App) => {
  Vue.component('MwPagination', Pagination)
}

export default Pagination
