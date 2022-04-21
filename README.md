# Toast - Vue3 web-component

## Vue3 web-component toast with Vite.
### (web component made with Vue3 & Vite)

## [![Generic badge](https://img.shields.io/badge/&#9881;-HTML-green.svg?style=plastic&logo=HTML5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) [![Generic badge](https://img.shields.io/badge/&#9881;-CSS-blue.svg?style=plastic&logo=CSS3)](https://www.tutorialrepublic.com/css-tutorial/) [![Generic badge](https://img.shields.io/badge/&#9881;-JavaScript-yellow.svg?style=plastic&logo=JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Generic badge](https://img.shields.io/badge/&#9881;-VUE.js-BRIGHTGREEN.svg?style=plastic&logo=Vue.js)](https://vuejs.org/) [![Generic badge](https://img.shields.io/badge/&#9881;-Vite-yellowgreen.svg?style=plastic&logo=Vite)](https://vitejs.dev/)

<hr>

##### In HTML header:
###### `<script type="module" crossorigin src="/toast.js"></script>`
###### `<link rel="modulepreload" href="/vue.js" />`

##### Place component with or without attributes (named slot can be passed):
    <custom-toast is-active toast-data toast-style>
      <span slot="additionalData">
        <h3>additional info in slot</h3>
        <i>tandar mandara broc</i>
      </span>
    </custom-toast>

##### Reference component:
###### `const toast = document.querySelector('custom-toast')`
##### Set `is-active` attribute to `true` to show toast:
    const showToast = () => {
      toast.setAttribute('is-active', 'true')
    }
##### Listen to event `close-toast`:
    window.addEventListener('close-toast', toastClosed)
    function toastClosed() {
      toast.setAttribute('is-active', 'false')
    }

##### * Set component attribute `toast-data` as JSON object
#####   with following properties: 
- <i>`title`</i> (String)
- <i>`message`</i> (String - can be used html)
- <i>`type`</i> (String - info, success, error)>

###### example: 
    const td = { title: 'some title', message: 'message', type: 'info' }
    document.querySelector('custom-toast').setAttribute('toast-data', JSON.stringify(td))

##### * Styles can be set by setting attribute `toast-style`
##### with following properties:
- <i>`position`</i> (String - center, left-top, right-top, left-bottom, right-bottom)
- <i>`decoration`</i> (Boolean)
- <i>`backdrop`</i> (Boolean)
- <i>`colorized`</i> (Boolean)
- <i>`color`</i> (String - any color)
- <i>`font`</i> (String - any font-family)</span>

###### example:
    const ts = { position: 'center', decoration: false, backdrop: false, color: "#ffffff", font: "'Open Sans', sans-serif" }
    document.querySelector('custom-toast').setAttribute('toast-style', JSON.stringify(ts))

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
