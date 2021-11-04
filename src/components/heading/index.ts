import { App } from 'vue'
import Heading from './MwHeading.vue'

Heading.install = (Vue: App) => {
  Vue.component('MwHeading', Heading)
}

export default Heading
