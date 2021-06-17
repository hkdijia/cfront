import mitt from "mitt"

import { createApp } from 'vue'

import App from './App.vue'
//import createStore from "vuex/dist/vuex.mjs";
import router from './router'
import {store} from './store'
import installElementPlus from './plugins/element'

const app = createApp(App)

//挂载事务总线
app.config.globalProperties.$bus = new mitt()

installElementPlus(app)
app.use(store).use(router).mount('#app')
