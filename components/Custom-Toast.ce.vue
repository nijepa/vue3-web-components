<template>
  <!-- <div
    ref="toastWrapper"
    :class="[$attrs.position || 'center', { infront: active }]"
    id="toast-wrapper"
  > -->
  <div
    ref="toastWrapper"
    :class="[applyStyle.position, { infront: active }]"
    id="toast-wrapper"
  >
    <div
      class="toast__open"
      :class="[{ hide: !active }, { backdrop: applyStyle.backdrop }]"
      @click="hideToast"
    ></div>
    <transition name="wobble" appear v-show="active">
      <div
        id="toast"
        class="toast"
        :class="[{ hide: !active }, { colorized: applyStyle.colorized }]"
      >
        <div class="toast__title" :class="msgType">
          <span id="toast-title">
            <div v-if="!applyStyle.colorized && !applyStyle.decoration">
              <svg
                v-if="msgType === 'success'"
                width="24"
                height="24"
                fill="rgb(110, 181, 49)"
                class="bi bi-check-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"
                />
              </svg>
              <svg
                v-if="msgType === 'error'"
                width="24"
                height="24"
                fill="rgb(195, 27, 25)"
                class="bi bi-exclamation-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
                />
              </svg>
              <svg
                v-if="msgType === 'info'"
                width="24"
                height="24"
                fill="rgb(13, 43, 237)"
                class="bi bi-info-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                />
              </svg>
            </div>
            {{ applyData.title }}
          </span>
          <span v-if="!isFixed" class="toast__close" @click="hideToast">
            <svg
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </div>
        <div class="toast__content">
          <span v-if="applyStyle.decoration || applyStyle.colorized">
            <svg
              v-if="msgType === 'error'"
              width="48"
              height="48"
              fill="rgb(195, 27, 25)"
              class="bi bi-exclamation-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
              />
            </svg>
            <svg
              v-if="msgType === 'success'"
              width="48"
              height="48"
              fill="rgb(110, 181, 49)"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
              />
            </svg>
            <svg
              v-if="msgType === 'info'"
              width="48"
              height="48"
              fill="rgb(13, 43, 237)"
              class="bi bi-info-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"
              />
            </svg>
          </span>
          <div id="toast-msg" v-html="applyData.message"></div>
        </div>
        <div v-if="isFixed" class="">
          <p>{{ JSON.parse(actionTitle) }}</p>
          <a :href="handleAction" class="btn">{{ JSON.parse(actionBtn) }}</a>
        </div>
        <slot name="additionalData" />
      </div>
    </transition>
  </div>
</template>

<!-- <script>
export default{
  inheritAttrs: false
}
</script> -->
<script setup>
import { ref, computed, watch, useAttrs } from 'vue';

// setting props
const props = defineProps({
  isActive: {
    type: String,
    default: 'false',
  },
  toastData: {
    type: String,
  },
  toastStyle: {
    type: String,
  },
  fixed: {
    type: String,
    default: 'false',
  },
  actionUrl: {
    type: String,
    default: '',
  },
  actionTitle: {
    type: String,
    default: '',
  },
  actionBtn: {
    type: String,
    default: '',
  },
});
// redirect action
const isFixed = computed(() => {
  return props.fixed === 'true';
});
const handleAction = computed(() => {
  return props.actionUrl.split(';')[0].split('"')[1];
});
// setting attributes
const attrs = useAttrs();
const booleans = ['decoration', 'colorized', 'backdrop'];
const setAttrs = (prop) => {
  Object.keys(attrs).forEach((a) => {
    if (Object.keys(prop).includes(a)) {
      if (booleans.includes(prop[a])) {
        prop[a] = attrs[a] === true;
      } else prop[a] = attrs[a];
    }
  });
};
// setting up default data & applying them with prop or data attributes
const defaultData = ref({
  title: 'set custom title',
  message: `message`,
  type: 'info',
});
const applyData = computed(() => {
  if (props.toastData)
    defaultData.value = {
      ...defaultData.value,
      ...JSON.parse(props.toastData),
    };
  attrs && setAttrs(defaultData.value);
  return defaultData.value;
});
// setting type of the toast
let typeColor = ref(null);
let types = new Map([
  ['error', 'rgb(195, 27, 25)'],
  ['info', 'rgb(13, 43, 237)'],
  ['success', 'rgb(110, 181, 49)'],
]);
const msgType = computed(() => {
  typeColor.value = types.get(applyData.value.type);
  return applyData.value.type;
});
// setting up default styles & applying them with prop or style attributes
const defaultStyle = ref({
  position: 'center',
  decoration: false,
  colorized: false,
  backdrop: true,
  color: '#ffb700',
  font: "'Open Sans', sans-serif",
});
const applyStyle = computed(() => {
  if (props.toastStyle)
    defaultStyle.value = {
      ...defaultStyle.value,
      ...JSON.parse(props.toastStyle),
    };
  attrs && setAttrs(defaultStyle.value);
  return defaultStyle.value;
});
// setting toast state
const active = ref(false);
watch(
  () => props.isActive,
  (newValue) => {
    active.value = newValue === 'true';
  }
);
// creating & emitting event
const emit = defineEmits(['close-toast']);
const toastWrapper = ref(null);
const hideToast = () => {
  if (!isFixed.value) {
    active.value = false;
    toastWrapper.value.dispatchEvent(
      new CustomEvent('close-toast', {
        bubbles: true,
        composed: true,
      })
    );
  }
};
</script>
<style>
#toast-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -9;
  display: flex;
  min-height: 80vh;
}
.infront {
  z-index: 9999 !important;
}
.toast__open::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  content: '';
  transition: all 5s;
  opacity: 1;
}
.backdrop::after {
  background: rgba(0, 0, 0, 0.5);
}
.toast__open.hide {
  display: none;
  opacity: 0;
}
.toast {
  max-width: 500px;
  min-width: 150px;
  background-color: white;
  border-radius: 0.5em;
  box-shadow: 5px 5px 12px rgb(0 0 0 / 15%);
  display: flex;
  flex-direction: column;
  padding: 1em;
  z-index: 999;
  font-family: v-bind(applyStyle.font);
  transition: 0.5s all ease;
  opacity: 1;
  overflow: hidden;
  height: auto;
  margin: 1em;
}
.toast.hide {
  padding: 0.5em;
  opacity: 0;
  height: 3.5em;
  z-index: -1;
}
.toast__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin: -1rem;
  padding: 0.5rem;
  border-bottom: 2px solid v-bind(typeColor);
}
#toast-title {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  color: v-bind(typeColor);
}
#toast-title svg {
  vertical-align: middle;
}
.toast__close {
  color: v-bind(typeColor);
  cursor: pointer;
  transition: all 1.4s ease;
}
.toast__close:hover svg {
  filter: brightness(0.55);
}
.toast__content {
  display: flex;
  align-items: center;
  column-gap: 0.5em;
  text-align: left;
  padding-top: 2em;
  word-break: break-all;
}
.btn {
  background-color: transparent;
  /* background-color: v-bind(typeColor); */
  color: v-bind(typeColor);
  /* color: #ffffff; */
  font-weight: 600;
  padding: 1rem;
  border-radius: 0.2rem;
  border: 2px solid v-bind(typeColor);
  cursor: pointer;
  margin-top: 1rem;
  float: right;
  box-shadow: 0 0 7px v-bind(typeColor);
  text-decoration: none;
  transition: all 0.4s ease;
}
.btn:hover {
  background-color: v-bind(typeColor);
  /* background-color: transparent; */
  color: #ffffff;
  /* color: v-bind(typeColor); */
  box-shadow: none;
}
.center {
  justify-content: center;
  align-items: center;
}
.left-top {
  justify-content: flex-start;
  align-items: flex-start;
}
.right-top {
  justify-content: flex-end;
  align-items: flex-start;
}
.left-bottom {
  justify-content: flex-start;
  align-items: flex-end;
}
.right-bottom {
  justify-content: flex-end;
  align-items: flex-end;
}
.colorized {
  border: 2px solid v-bind(typeColor);
}
.colorized .toast__title {
  background-color: v-bind(typeColor);
  border: 2px solid v-bind(typeColor);
}
.colorized .toast__title span {
  background-color: v-bind(typeColor);
  color: #ffffff !important;
}
.colorized .toast__title svg {
  fill: #ffffff;
}
.wobble-enter-active {
  animation: wobbles 0.8s ease;
}
.wobble-leave-active {
  transition: all 1s ease;
  /* animation: wobbles 1s linear; */
}
@keyframes wobbles {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 0.3;
  }
  60% {
    transform: translateX(8px);
    opacity: 0.3;
  }
  70% {
    transform: translateX(-8px);
    opacity: 0.7;
  }
  80% {
    transform: translateX(4px);
    opacity: 0.7;
  }
  90% {
    transform: translateX(-4px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
