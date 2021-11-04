import { App } from 'vue'
import Modal from './MwModal.vue'

Modal.install = (Vue: App) => {
  Vue.component('MwModal', Modal)
}

export default Modal
