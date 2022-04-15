<template>
  <div ref="elem">
    <div
      class="account-toast__open"
      :class="[active === 'false' ? 'h-hide' : '', applyStyle.backdrop ? 'backdrop' : '']"
      @click="hideToast"
    ></div>
    <transition name="wobble" mode="in-out">
      <div
        id="account-toast"
        class="account-toast"
        :class="[active === 'false' ? 'h-hide' : '', applyStyle.position]"
      >
        <div class="account-toast__title" :class="msgType">
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
          <span class="account-toast__close" @click="hideToast">
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
          <div id="toast-msg">{{ showData.msg }}</div>
        </div>
        <slot name="additionalInfo" />
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
    default: { title: "title", msg: "msg", type: "success" },
  },
  toastStyle: {
    type: String,
    default: { position: "center" },
  },
});

const defaultData = {
  title: "set custom title",
  msg: "set component attribute toastData as JSON object \n with following properties: title, msg, type",
  type: "info",
};
const showData = computed(() => {
  return props.toastData ? JSON.parse(props.toastData) : defaultData;
});
const msgType = computed(() => {
  if (props.toastData) {
    let msgType = "";
    switch (JSON.parse(props.toastData).type) {
      case "error":
        msgType = "error";
        break;
      case "info":
        msgType = "info";
        break;
      default:
        msgType = "success";
    }
    return msgType;
  } else {
    return defaultData.type;
  }
});

const defaultStyle = { position: "center", decoration: true, backdrop: false };
const applyStyle = computed(() => {
  return props.toastStyle ? JSON.parse(props.toastStyle) : defaultStyle;
});

const active = ref("false");
watch(
  () => props.isActive,
  (first, second) => {
    console.log(
      "Watch props.selected function called with args:",
      first,
      second
    );
    active.value = first;
  }
);

const emit = defineEmits(["closed"]);
const elem = ref(null);
const hideToast = () => {
  active.value = "false";
  elem.value.dispatchEvent(
    new CustomEvent("closed", {
      bubbles: true,
      composed: true,
    })
  );
};
</script>
<style scoped>
.account-toast {
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
}
.account-toast__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  font-weight: 600;
}
#toast-title {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}
.account-toast__close {
  cursor: pointer;
}
.account-toast__close:hover {
  color: yellow;
}
.account-toast {
  display: block;
  padding: 1em;
  transition: 0.5s all ease;
  opacity: 1;
  overflow: hidden;
  height: auto;
  /* animation: "wobbles" 0.5s ease-in;  */
}
.account-toast.h-hide {
  padding: 0.5em;
  opacity: 0;
  height: 0.5em;
}
.account-toast__open.h-hide {
  display: none;
}
.account-toast__open::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: rgba(0, 0, 0, 0.5); */
  background: transparent;
  content: "";
  z-index: 9;
  /*transition: 0.5s all linear;*/
  opacity: 1;
}
.backdrop::after {
  background: rgba(0, 0, 0, 0.5);
}
.toast__content {
  display: flex;
  align-items: center;
  column-gap: .5em;
  text-align: left;
}
.error span {
  color: rgb(195, 27, 25);
  /* box-shadow: 5px 5px 12px rgba(250, 22, 22, 0.822); */
}
.success span {
  color: rgb(110, 181, 49);
}

.info span {
  color: rgb(13, 43, 237);
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.left-top {
  top: 0;
  left: 0;
}
.right-top {
  top: 0;
  right: 0;
}
.left-bottom {
  bottom: 0;
  left: 0;
}
.right-bottom {
  bottom: 0;
  right: 0;
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
