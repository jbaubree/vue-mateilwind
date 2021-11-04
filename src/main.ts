import { createApp } from 'vue'
import App from './App.vue'
import i18n from './modules/i18n'
import VueMateilwind from './index'

const app = createApp(App)

app.use(i18n)
app.use(VueMateilwind)
app.mount('#app')
