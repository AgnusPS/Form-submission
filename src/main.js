import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex';

const app = createApp(App)
const store = createStore({
    state () {
      return {
        formDataList: []
      }
    },
    mutations: {
        formData(state,data) {
            state.formDataList.push(data);
        },
    }
  })

app.use(router)
app.use(store)


app.mount('#app')
