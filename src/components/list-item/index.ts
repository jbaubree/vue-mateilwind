import { App } from 'vue'
import ListItem from './MwListItem.vue'

ListItem.install = (Vue: App) => {
  Vue.component('MwListItem', ListItem)
}

export default ListItem
