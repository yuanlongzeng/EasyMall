import { createApp } from 'vue'

import { store, key } from './store'
import 'lib-flexible/flexible'
import Vant from "vant"
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
// import "./style/index.scss"

const app = createApp(App)

app.use(store, key)
app.use(Vant)  //TODO: 按需引入
app.use(router)
app.mount('#app')
