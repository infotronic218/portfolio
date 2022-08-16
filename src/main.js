import Vue from 'vue'
import App from './App.vue'
import jquery from 'jquery'
window.$ = window.jquery = jquery
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

router.afterEach((to) => {
    var path = to.path;
    var result = path.toString().localeCompare("/");
    if (window.$("#content").offset() && window.$("#slide").offset()) {
        if (result != 0) {
            window.$('html, body').animate({
                scrollTop: window.$("#content").offset().top
            }, 1000);
        } else {
            window.$('html, body').animate({
                scrollTop: window.$("#slide").offset().top
            }, 1000);
        }
    }
})
Vue.config.productionTip = false
new Vue({
    router: router,
    render: h => h(App),

}).$mount('#app')