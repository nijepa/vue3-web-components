<template>
  <div ref="elem">
    <div
      class="toast__open"
      :class="[
        active === 'false' ? 'h-hide' : '',
        applyStyle.backdrop ? 'backdrop' : '',
      ]"
      @click="hideToast"
    ></div>
    <transition name="wobble" mode="in-out">
      <div
        id="toast"
        class="toast"
        :class="[active === 'false' ? 'h-hide' : '', applyStyle.position, applyStyle.colorized ? 'colorized' : '']"
      >
        <div class="toast__title" :class="msgType">
          <span id="toast-title">
            <svg
              v-if="msgType === 'success'"
              xmlns="http://www.w3.org/2000/svg"
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
              xmlns="http://www.w3.org/2000/svg"
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
              xmlns="http://www.w3.org/2000/svg"
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
            {{ showData.title }}
          </span>
          <span class="toast__close" @click="hideToast">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          <span v-if="applyStyle.decoration">
            <svg
              v-if="msgType === 'error'"
              xmlns="http://www.w3.org/2000/svg"
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
              xmlns="http://www.w3.org/2000/svg"
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
              xmlns="http://www.w3.org/2000/svg"
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
          <div id="toast-msg" v-html="showData.message"></div>
        </div>
        <slot name="additionalData" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  isActive: {
    type: String,
    default: "false",
  },
  toastData: {
    type: String,
    default: { title: "title", message: "msg", type: "success" },
  },
  toastStyle: {
    type: String,
    default: {
      position: "center",
      decoration: true,
      colorized: false,
      backdrop: false,
      color: "#ffb700",
      font: "'Open Sans', sans-serif",
    },
  },
});

const defaultData = {
  title: "set custom title",
  message: `<p>* Set component attribute <b>toast-data</b> as JSON object</p>
            <div>
            <p>with following properties: </p>
            <ul>
            <li><i>title</i> <span>(String)</span></li>
            <li><i>message</i> <span>(String - can be used html)</span></li>
            <li><i>type</i> <span>(String - info, success, error)</span></li>
            </ul>
            </div>
            <li>example: </li>
            <p><b><i>const td = { title: 'some title', message: 'message', type: 'info' }</i></b></p>
            <p><b><i>document.querySelector('custom-toast').setAttribute('toast-data', JSON.stringify(td))</i></b></p>
            <br />
            <p>* Styles can be set by setting attribute <b>toast-style</b></p>
            <div>
            <p>with following properties:</p>
            <ul>
            <li><i>position</i> <span>(String - center, left-top, right-top, left-bottom, right-bottom)</span></li>
            <li><i>decoration</i> <span>(Boolean)</span></li>
            <li><i>backdrop</i> <span>(Boolean)</span></li>
            <li><i>colorized</i> <span>(Boolean)</span></li>
            <li><i>color</i> <span>(String - any color)</span></li>
            <li><i>font</i> <span>(String - any font-family)</span></li>
            </ul>
            </div>
            <li>example:</li>
            <p><b><i>const ts = { position: 'center', decoration: false, backdrop: false, color: "#ffffff", font: "'Open Sans', sans-serif" }</i></b></p>
            <p><b><i>document.querySelector('custom-toast').setAttribute('toast-style', JSON.stringify(ts))</i></b></p>`,
  type: "info",
};
const showData = computed(() => {
  return props.toastData ? JSON.parse(props.toastData) : defaultData;
});
let typeColor = ref(null)
const msgType = computed(() => {
  if (props.toastData) {
    let msgType = "";
    switch (JSON.parse(props.toastData).type) {
      case "error":
        msgType = "error";
        break;
      case "info":
        msgType = "info";
        typeColor = "#0d2bed"
        break;
      default:
        msgType = "success";
    }
    setColorize()
    return msgType;
  } else {
    return defaultData.type;
  }
});
const setColorize = () => {
  if (JSON.parse(props.toastStyle)?.colorized) {
    switch (JSON.parse(props.toastData).type) {
      case "error":
        typeColor = "#c31b19"
        break;
      case "info":
        typeColor = "#0d2bed"
        break;
      default:
        typeColor = "#6eb531"
    }
  }
}

const defaultStyle = {
  position: "center",
  decoration: true,
  colorized: false,
  backdrop: false,
  color: "#ffb700",
  font: "'Open Sans', sans-serif",
};
const applyStyle = computed(() => {
  return props.toastStyle ? JSON.parse(props.toastStyle) : defaultStyle;
});

const active = ref("false");
watch(
  () => props.isActive,
  (newValue, oldValue) => {
    console.log(
      "Watch props.selected function called with args:",
      newValue,
      oldValue
    );
    active.value = newValue;
  }
);

const emit = defineEmits(["close-toast"]);
const elem = ref(null);
const hideToast = () => {
  active.value = "false";
  elem.value.dispatchEvent(
    new CustomEvent("close-toast", {
      bubbles: true,
      composed: true,
    })
  );
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.toast {
  max-width: 500px;
  min-width: 150px;
  position: fixed;
  /* top: 40%;
  left: 40%;
  transform: translate(-50%, -50%); */
  background-color: white;
  border-radius: 0.5em;
  box-shadow: 5px 5px 12px rgb(0 0 0 / 15%);
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding: 1em;
  z-index: 999;
  font-family: v-bind(defaultStyle.font);
}
.toast__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-bottom: 1rem; */
  font-weight: 600;
  margin: -1rem;
  padding: .5rem;
  border-bottom: 2px solid v-bind(typeColor);
}
#toast-title {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}
.toast__close {
  cursor: pointer;
}
.toast__close:hover svg {
  /* fill: v-bind(typeColor) !important; */
  filter: brightness(.55);
}
.toast {
  display: block;
  padding: 1em;
  transition: 0.5s all ease;
  opacity: 1;
  overflow: hidden;
  height: auto;
  /* animation: "wobbles" 0.5s ease-in;  */
}
.toast.h-hide {
  padding: 0.5em;
  opacity: 0;
  height: 3.5em;
}
.toast__open.h-hide {
  display: none;
  opacity: 0;
}
.toast__open::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: rgba(0, 0, 0, 0.5); */
  background: transparent;
  content: "";
  z-index: 9;
  transition: opacity 1s ease;
  opacity: 1;
}
.backdrop::after {
  background: rgba(0, 0, 0, 0.5);
}
.toast__content {
  display: flex;
  align-items: center;
  column-gap: 0.5em;
  text-align: left;
  padding-top: 2rem;
}
.error span {
  color: #c31b19;
  /* box-shadow: 5px 5px 12px rgba(250, 22, 22, 0.822); */
}
.success span {
  color: #6eb531;
}

.info span {
  color: #0d2bed;
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.left-top {
  top: 0;
  left: 0;
  margin-top: 1em;
  margin-left: 1em;
}
.right-top {
  top: 0;
  right: 0;
  margin-top: 1em;
  margin-right: 1em;
}
.left-bottom {
  bottom: 0;
  left: 0;
  margin-left: 1em;
  margin-bottom: 1em;
}
.right-bottom {
  bottom: 0;
  right: 0;
  margin-right: 1em;
  margin-bottom: 1rem;
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
  color: white;
}
.colorized .toast__title svg {
  fill: white;
}
.wobble-enter-active {
  animation: wobbles 1s ease;
}

.wobble-leave-active {
  animation: wobbles 1s ease;
}

@keyframes wobbles {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 0.3;
  }
  60% {
    transform: translateX(18px);
    opacity: 0.3;
  }
  70% {
    transform: translateX(-18px);
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
