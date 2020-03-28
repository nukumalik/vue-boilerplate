import Vue from 'vue';
import Views from './views';
import router from './router';
import store from './store';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(Views.App)
}).$mount('#app');
