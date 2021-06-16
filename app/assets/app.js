/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import Vue from 'vue';
import Routes from './routes.js';
import App from './views/App';
import VueToastify from "vue-toastify";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import vmodal from 'vue-js-modal'
import SlidingPanel from 'vue-sliding-panel'
import VueTailwindPicker from 'vue-tailwind-picker'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.snow.css' // for snow theme

Vue.use(VueToastify);
Vue.use(VueQuillEditor)
Vue.use(VueTailwindPicker)
Vue.use(SlidingPanel)
Vue.use(vmodal)
Vue.use(VueToast);


const app = new Vue({
  router: Routes,
  render: h => h(App),
}).$mount('#app');

export default app