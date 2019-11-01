import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'

const router = new VueRouter({
    routes: routes,
    mode: 'history',
    base: '/'
});

Vue.config.productionTip = false
new Vue({
    router: router,
    render: h => h(App),

}).$mount('#app')