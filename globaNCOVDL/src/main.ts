import { createApp } from 'vue'
import './assets/resect.css'
import App from './App.vue'
import { createPinia } from 'pinia'
//import 'default-passive-events'
//解决拖动事件控制台报警卸载npm uninstall default-passive-events然后注释掉该插件
//副作用：浏览器读取速度好像变慢了


const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')