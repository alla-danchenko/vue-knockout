<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <KnockoutFrame v-bind:component = "component"></KnockoutFrame>
  </div>
</template>

<script>
import KnockoutFrame from './components/KnockoutFrame.vue'
import {Component} from './ko-components/ko-component';

const koComponent = new Component();
console.log(koComponent);

export default {
  name: 'App',
  data() {
    return {
      component: koComponent
    }
  },
  components: {
    KnockoutFrame
  }
}
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
</style>
