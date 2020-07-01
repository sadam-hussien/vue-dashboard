import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))

// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// fontawesome
import "@fortawesome/fontawesome-free/css/all.css";

// scss
import "@/scss/style.scss";

// globalComponents 
import GlobalComponents from "./GlobalComponents";

GlobalComponents.forEach(component => {

    Vue.component(component.name, component);

});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
