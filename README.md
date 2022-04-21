# Toast - Vue3 web-component

## Vue3 web-component toast with Vite.
### (web component made with Vue3 & Vite)

## [![Generic badge](https://img.shields.io/badge/&#9881;-HTML-green.svg?style=plastic&logo=HTML5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) [![Generic badge](https://img.shields.io/badge/&#9881;-CSS-blue.svg?style=plastic&logo=CSS3)](https://www.tutorialrepublic.com/css-tutorial/) [![Generic badge](https://img.shields.io/badge/&#9881;-JavaScript-yellow.svg?style=plastic&logo=JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Generic badge](https://img.shields.io/badge/&#9881;-VUE.js-BRIGHTGREEN.svg?style=plastic&logo=Vue.js)](https://vuejs.org/) [![Generic badge](https://img.shields.io/badge/&#9881;-Vite-yellowgreen.svg?style=plastic&logo=Vite)](https://vitejs.dev/)

<hr>
#### In HTML header:
##### `<script type="module" crossorigin src="/assets/toast.js"></script>`
##### `<link rel="modulepreload" href="/assets/vue.js" />`

#### Place component with or without attributes (named slot can be passed):

    `<custom-toast is-active toast-data toast-style>
      <span slot="additionalData">
        <h3>additional info in slot</h3>
        <i>tandar mandara broc</i>
      </span>
    </custom-toast>`

##### Reference component:
###### `const toast = document.querySelector('custom-toast')`
##### Set `is-active` attribute to `true` to show toast:
    `const showToast = () => {
      toast.setAttribute('is-active', 'true')
    }`
##### Listen to event `close-toast`:
    window.addEventListener('close-toast', toastClosed)
    function toastClosed() {
      toast.setAttribute('is-active', 'false')
    }`

<p>* Set component attribute <b>toast-data</b> as JSON object</p>
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
<p><b><i>document.querySelector('custom-toast').setAttribute('toast-style', JSON.stringify(ts))</i></b></p>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
