<template>
  <div id="app">
      <b-navbar type="dark" variant="dark">
        <b-navbar-brand>
            <span class="d-none d-md-inline">Vue + Knockout Admin</span>
        </b-navbar-brand>
      </b-navbar>
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar pt-3">
                       <ul class="nav flex-column">
                            <li class="nav-item p-2">
                                <router-link to="/users" active>Users</router-link>
                            </li>
                            <li class="nav-item p-2">
                                <router-link to="/about">About</router-link>
                            </li>
                        </ul>
                </nav>
                <div class="context-container col-md-10 mt-3">
                    <router-view />
                </div>
            </div>

        </div>
  </div>
</template>

<script>
// import KnockoutFrame from './components/KnockoutFrame.vue'
// import {Component} from './ko-components/ko-component';

// const koComponent = new Component();
// console.log(koComponent);

export default {
  name: 'App',
  /*data() {
    return {
      component: koComponent
    }
  },*/
  components: {
   // KnockoutFrame
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar-brand {
    padding: 0;
}

.sidebar {
    height: 100vh;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

</style>
