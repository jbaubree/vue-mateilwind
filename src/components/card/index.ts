import { App } from 'vue'
import Card from './MwCard.vue'

Card.install = (Vue: App) => {
  Vue.component('MwCard', Card)
}

export default Card
