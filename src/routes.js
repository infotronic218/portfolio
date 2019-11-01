//import Home from './components/Home.vue'
import vueRouter from 'vue-router'
import Vue from 'vue'
import Application from './components/Application.vue'
import Projects from './components/Projects.vue'
import Competences from './components/Competences.vue'
import Formations from './components/Formations.vue'
import Certificates from './components/Certificates.vue'
import Experiences from './components/Experiences.vue'
import Contact from './components/Contact.vue'
Vue.use(vueRouter);
const routes = [{
        path: '',
        component: Application,
    }, {
        path: '/projects',
        component: Projects,
    },
    {
        path: '/competences',
        component: Competences
    },
    {
        path: '/formations',
        component: Formations
    }, {
        path: '/certificates',
        component: Certificates
    },

    {
        path: '/experiences',
        component: Experiences
    },
    {
        path: '/contact',
        component: Contact
    }, {
        path: "*",
        component: Application
    }
];

export default routes;