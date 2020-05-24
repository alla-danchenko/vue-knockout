<template>
    <div>
        <KnockoutFrame v-bind:component = "component"></KnockoutFrame>
    </div>
</template>

<script>
  import KnockoutFrame from './KnockoutFrame.vue';
  import usersJson from '../assets/dummydata/users.json'
  import {KoUserlist} from '../ko-components/ko-userlist';
  const koComponent = new KoUserlist(usersJson);
  export default {
    name: "Users",
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
