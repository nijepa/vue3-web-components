<template>
    <div class="custom-cards" >
      <div class="custom-card__wrapper" :class="[{ 'h-hide': !active }, { colorized: applyStyle.colorized }]">
        <div class="card stage__card voucher-overview">
          <div class="card-body">
            <h4 class="overview-title text-left">{{toastData.title}}</h4>
            <div id="voucher-history-wrapper" class="d-flex flex-column">
              <div class="loading-spinner hidden"></div>
              <div class="custom-card__list" v-for="(voucher, i) in testData" :key="i">
                <div class="custom-card">
                  <div class="custom-card__image">
                    <img :src="`https://images.cadooz.com/${voucher.voucherImage}`" alt="${voucher.name}" class=" custom-card__image--container__image--voucher">
                  </div> 
                  <div class="custom-card__details">
                    <div class="">$messages.get('shop.ebc.welcome.date_provision'): <span>{{voucher.voucherDeliveryDate}}</span></div> 
                    <div class="">$messages.get('shop.ebc.welcome.voucher-value'): <span>{{voucher.voucherValue}}€</span></div>
                    <div class="">$messages.get('shop.ebc.welcome.donation-type'): <span>{{voucher.benefitModule}}</span></div>
                  </div>
                  <div class="custom-card__list-btn ml-sm-auto">
                    <button class="btn btn-primary">$messages.get('shop.ebc.welcome.change_voucher')</button>
                  </div>
                </div>
                <p class="product-text text-white">-</p>
              </div>
            </div>
          </div>
          <a href="https://employee-benefit-club.n3.cadooztest.com/frontend/view.do;jsessionid=JZMyY2BUB6KRg5ot_lEHizt27xu1kZExYq7_IdYa.betatest03?path=%2Fshop%2Febc%2Forder_history" id="to-voucher-history" class="btn btn-outline product-btn">Zur Gutscheinhistorie</a>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

let testData = [
    {
      name: 'Test1',
      voucherValue: '10',
      voucherImage:
        'https://images.cadooz.com/addons/product/21/2178/attribute.product.giftcard_image.png',
      voucherRepetitionFrequency: 'BMN',
      voucherCurrency: '$',
      voucherDeliveryDate: '25.04.2022',
    },
    {
      name: 'IKEA',
      voucherValue: '100',
      voucherImage:
        'https://images.cadooz.com/addons/product/21/2178/attribute.product.giftcard_image.png',
      voucherRepetitionFrequency: 'BMN',
      voucherCurrency: '$',
      voucherDeliveryDate: '25.04.2022',
    },
    {
      name: 'BestChoice',
      voucherValue: '10000',
      voucherImage:
        'https://images.cadooz.com/addons/product/21/2178/attribute.product.giftcard_image.png',
      voucherRepetitionFrequency: 'MON',
      voucherCurrency: '€',
      voucherDeliveryDate: '25.04.3022',
    },
  ];

const props = defineProps({
  isActive: {
    type: String,
    default: 'false',
  },
  toastData: {
    type: String,
    default: { title: 'title', message: 'msg', type: 'success' },
  },
  toastStyle: {
    type: String,
    default: {
      position: 'center',
      decoration: true,
      colorized: false,
      backdrop: false,
      color: '#ffb700',
      font: "'Open Sans', sans-serif",
    },
  },
});

const defaultData = {
  title: 'set custom title',
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
  type: 'info',
};
const showData = computed(() => {
  return props.toastData ? JSON.parse(props.toastData) : defaultData;
});
let typeColor = ref(null);
const msgType = computed(() => {
  if (props.toastData.length) {
    switch (JSON.parse(props.toastData).type) {
      case 'error':
        typeColor.value = 'rgb(195, 27, 25)';
        break;
      case 'info':
        typeColor.value = 'rgb(13, 43, 237)';
        break;
      default:
        typeColor.value = 'rgb(110, 181, 49)';
    }
    return JSON.parse(props.toastData).type;
  } else {
    typeColor.value = 'rgb(13, 43, 237)';
    return defaultData.type;
  }
});

const defaultStyle = {
  position: 'center',
  decoration: false,
  colorized: false,
  backdrop: false,
  color: '#ffb700',
  font: "'Open Sans', sans-serif",
};
const applyStyle = computed(() => {
  return props.toastStyle ? JSON.parse(props.toastStyle) : defaultStyle;
});

const active = ref(false);
watch(
  () => props.isActive,
  (newValue, oldValue) => {
    // console.log("Watch props.selected function called with args:", newValue, oldValue);
    active.value = newValue === 'true';
  }
);

const emit = defineEmits(['close-toast']);
const toastWrapper = ref(null);
const hideToast = () => {
  active.value = false;
  toastWrapper.value.dispatchEvent(
    new CustomEvent('close-toast', {
      bubbles: true,
      composed: true,
    })
  );
};
</script>
<style>
.custom-cards {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: v-bind(defaultStyle.font);
}
.stage__card {
    height: 100%;
    background-color: transparent;
    border: none;
}

.voucher-overview {
    padding: 1rem;
    background: rgb(255, 255, 255);
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 12%);
}
.custom-card__list {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgrey;
    padding: 1em 0;
    height: 100%;
}
.custom-card__list-btn {
    align-self: flex-end;
    margin-top: 1rem;
}
.custom-card {
    display: flex;
    column-gap: 1em;
    align-items: center;
    font-size: 1rem;
}
.custom-card__image {
    min-width: 120px;
    max-width: 120px;
}
.custom-card__image img {
    width: 100%;
}
.custom-card__image--container__image--voucher {
    box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 12%);
    border-radius: 0.5rem;
}
img {
    vertical-align: middle;
    border-style: none;
}
.custom-card__list-btn {
    align-self: flex-end;
    margin-top: 1rem;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.btn-primary {
    background-color: rgb(243, 145, 0);
    color: rgb(255, 255, 255);
    outline: none;
    border: 0;
}
.btn {
    letter-spacing: -0.0125rem;
    padding: 0.75rem;
    font-weight: 600;
    border-radius: 0.5rem;
}
.btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: v-bind(defaultStyle.color);
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
@media (min-width: 576px) {
.ml-sm-auto, .mx-sm-auto {
    margin-left: auto!important;
}
}
</style>
