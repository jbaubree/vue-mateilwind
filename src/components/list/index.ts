import { App } from 'vue'
import List from './MwList.vue'

List.install = (Vue: App) => {
  Vue.component('MwList', List)
}

export default List
