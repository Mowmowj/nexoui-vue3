import { createApp } from 'vue'
import App from './App.vue'
import Kit from './views/Kit.vue'
import Home from './views/Home.vue'



import './index.css'
import {createWebHashHistory , createRouter} from 'vue-router'

const history = createWebHashHistory()

const router = createRouter({
    history:history,
    routes: [
        {path:'/', component:Home},
        {path:'/kit', component:Kit}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
