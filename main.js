import { defineCustomElement } from 'vue';
import Toast from './components/Custom-Toast.ce.vue';
const CustomToast = defineCustomElement(Toast);
customElements.define('custom-toast', CustomToast);
