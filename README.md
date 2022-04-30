# custom-toast

## Vite, Vue3 web-component `custom-toast`
### (standalone web component made with Vue3 & Vite)

## [![Generic badge](https://img.shields.io/badge/&#9881;-HTML-red.svg?style=flat&logo=HTML5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) [![Generic badge](https://img.shields.io/badge/&#9881;-CSS-blue.svg?style=flat&logo=CSS3)](https://www.tutorialrepublic.com/css-tutorial/) [![Generic badge](https://img.shields.io/badge/&#9881;-JavaScript-yellow.svg?style=flat&logo=JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Generic badge](https://img.shields.io/badge/&#9881;-VUE.js-BRIGHTGREEN.svg?style=flat&logo=Vue.js)](https://vuejs.org/) [![Generic badge](https://img.shields.io/badge/&#9881;-Vite-darkblue.svg?style=flat&logo=Vite)](https://vitejs.dev/)
<hr>

## Usage
##### In HTML header:
###### `<script type="module" crossorigin src="/toast.js"></script>`
###### `<link rel="modulepreload" href="/vue.js" />`

##### Place component with or without attributes (named slot can be passed):
    <custom-toast is-active toast-data toast-style>
      <span slot="additionalData">
        <h3>additional info in slot</h3>
        <p>tandar mandara broc</p>
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
- ***`title`*** (String)
- ***`message`*** (String - *can be used html*)
- ***`type`*** (String - *info, success, error*)>

###### example: 
    const td = { title: 'some title', 
                message: 'some message', 
                type: 'info' }
    document.querySelector('custom-toast').setAttribute('toast-data', JSON.stringify(td))

##### * Styles can be set by setting attribute `toast-style`
##### with following properties:
- ***`position`*** (String - *center, left-top, right-top, left-bottom, right-bottom*)
- ***`decoration`*** (Boolean)
- ***`backdrop`*** (Boolean)
- ***`colorized`*** (Boolean)
- ***`color`*** (String - *any color*)
- ***`font`*** (String - *any font-family*)</span>

###### example:
    const ts = { position: 'center', 
                decoration: false, 
                colorized: false, 
                backdrop: false, 
                color: "#ffffff", 
                font: "'Open Sans', sans-serif" }
    document.querySelector('custom-toast').setAttribute('toast-style', JSON.stringify(ts))
<hr>

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```
