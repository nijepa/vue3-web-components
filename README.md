# custom-toast

## Vite, Vue3 web-component `custom-toast`
### (standalone web component made with Vue3 & Vite)

## [![Generic badge](https://img.shields.io/badge/:-HTML-red.svg?style=flat&logo=HTML5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) [![Generic badge](https://img.shields.io/badge/:-CSS-blue.svg?style=flat&logo=CSS3)](https://www.tutorialrepublic.com/css-tutorial/) [![Generic badge](https://img.shields.io/badge/:-JavaScript-yellow.svg?style=flat&logo=JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Generic badge](https://img.shields.io/badge/:-VUE.js-BRIGHTGREEN.svg?style=flat&logo=Vue.js)](https://vuejs.org/) [![Generic badge](https://img.shields.io/badge/:-Vite-darkblue.svg?style=flat&logo=Vite)](https://vitejs.dev/)
<hr>

## Usage
## Import component
#### In HTML header:
```html
  <script type="module" crossorigin src="/toast.js"></script>
  <link rel="modulepreload" href="/vue.js" />
```

## Place component 
#### with or without attributes (named slot can be passed):
```html
  <custom-toast />
  // OR
  <custom-toast is-active toast-data toast-style>
    <span slot="additionalData">
      <h3>additional info in slot</h3>
      <p>tandar mandara broc</p>
    </span>
  </custom-toast>
```
## Reference and activate component
```js
  const toast = document.querySelector('custom-toast')
```
#### Set `is-active` attribute to `true` to show toast:
```js
  const showToast = () => {
    toast.setAttribute('is-active', 'true')
  }
```
## Listen to event `close-toast`
```js
  window.addEventListener('close-toast', toastClosed)

  const toastClosed = () => {
    toast.setAttribute('is-active', 'false')
  }
```
## Passing data to component
### With attributes
#### We can use some helper function to pass all the attributes:
```js
  const setAttributes = (el, attrs) => {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
```
#### - *passing attributes example:*
```js
  const td = { title: 'some title', 
              message: 'some message', 
              type: 'info',
              position: 'center', 
              decoration: false, 
              colorized: false, 
              backdrop: false, 
              color: "#ffffff", 
              font: "'Open Sans', sans-serif" }

  setAttributes(toast, td)
```
<hr>


### With props
#####   Set component attribute `toast-data` as JSON with following properties: 
- ***`title`*** (String)
- ***`message`*** (String - *can be used html*)
- ***`type`*** (String - *info, success, error*)

#### - *passing content example* 
```js
  const td = { title: 'some title', 
              message: 'some message', 
              type: 'info' }

  toast.setAttribute('toast-data', JSON.stringify(td))
```
##### Styles can be set by setting attribute `toast-style` as JSON with following properties:
 - ***`position`*** (String - *center, left-top, right-top, left-bottom, right-bottom*)
 - ***`decoration`*** (Boolean)
 - ***`backdrop`*** (Boolean)
 - ***`colorized`*** (Boolean)
 - ***`color`*** (String - *any color*)
 - ***`font`*** (String - *any font-family*)

### - ***passing styles example:***
```js
  const ts = { position: 'center', 
              decoration: false, 
              colorized: false, 
              backdrop: false, 
              color: "#ffffff", 
              font: "'Open Sans', sans-serif" }

  toast.setAttribute('toast-style', JSON.stringify(ts))
```
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
