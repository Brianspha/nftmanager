import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import router from "./router"
import VueAsyncData from "vue-async-data";
import EmbarkJS from '../embarkArtifacts/embarkjs';

Vue.use(VueAsyncData)
Vue.use(Vuetify)

EmbarkJS.onReady(() => {
  new Vue({
    render: h => h(App),
    router
  }).$mount('#app')
})