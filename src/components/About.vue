<template>
   <div>
      <KnockoutFrame v-bind:component = "component"></KnockoutFrame>
   </div>
</template>

<script>
   import KnockoutFrame from './KnockoutFrame.vue'
   import {About} from '../ko-components/ko-about';
   const koComponent = new About();
  export default {
     name: "About",
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

<style scoped>
</style>
