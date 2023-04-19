import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import components from '@/components/UI/index'
import './index.css';

const pinia = createPinia()
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(pinia)
app.use(router).mount('#app')