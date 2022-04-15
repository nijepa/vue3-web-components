import './style.css';
import { defineCustomElement } from 'vue';
import CurrentTime from './components/CurrentTime.ce.vue';
import CustomObject from './components/CustomObject.ce.vue';
import Toast from './components/Toast.ce.vue';

const CurrentTimeComponent = defineCustomElement(CurrentTime);
const CustomObjectComponent = defineCustomElement(CustomObject);
const CustomToast = defineCustomElement(Toast);

customElements.define('current-time', CurrentTimeComponent);
customElements.define('custom-object', CustomObjectComponent);
customElements.define('custom-toast', CustomToast);

document
  .querySelector('current-time')
  .addEventListener('datechange', recordTime);

function recordTime(event) {
  //console.log(event.detail[0].value);
}

