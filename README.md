# vue-knockout
[![vue.js](https://img.shields.io/badge/vue.js-2.6.11-brightgreen)](https://github.com/vuejs/vue)
[![vue.js](https://img.shields.io/badge/knockout-3.5.1-brightgreen)](https://github.com/knockout/knockout)

Project to review embedding Knockout component within Vue app.

[Demo](https://alla-danchenko.github.io/vue-knockout/)

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

### Lints and fixes files
```
npm run lint
```

## Goals to achieve
- [x] Setup Vue-Knockout demo admin app: main SPA, basic html markup and routing
- [x] Setup simple Knockout `About` component integrated into Vue app
- [x] Setup Knockout Userlist component integrated into Vue app
- [x] Setup Vue component for preview form called from Knockout
- [ ] Save data in Vue form and emit changes to Knockout parent component.
- [ ] Introduce Ko binding handler for third party libraries
- [ ] Bypass Vue router from Ko to dynamic Vue component
- [ ] Implement emit data from child to parent component

## Reference articles
- https://corstianboerman.com/2019-06-18/integrating-knockoutjs-into-vuejs.html
- https://stackoverflow.com/questions/51951020/use-knockout-js-on-the-same-page-as-vue-js
- https://css-tricks.com/creating-vue-js-component-instances-programmatically/
- https://vuejs.org/v2/api/#propsData
- https://forum.vuejs.org/t/direct-instantiation-of-the-vue-components-what-is-a-right-way/40745

