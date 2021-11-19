import { App } from 'vue'
import Alert from './MwAlert.vue'

Alert.install = (Vue: App) => {
  Vue.component('MwAlert', Alert)
}

export default Alert
