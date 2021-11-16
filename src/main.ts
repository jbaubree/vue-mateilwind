import { createApp } from 'vue'
import App from './App.vue'

import VueMateilwind from './index'

const options = {
  messages: {
    en: {
      test: 'testEn'
    },
    es: {
      test: 'testEs'
    },
  }
}

createApp(App).use(VueMateilwind, options).mount('#app')