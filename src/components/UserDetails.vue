<template>
    <div class="border m-3">
        <form class="p-2">
            <div class="form-group">
                <h4>User details form</h4>
                <span class="text-muted">This form demonstrates hierarchy: Vue-Vue-Ko-Vue.</span>
            </div>
            <div class="form-group">
                <label for="userFirstName">Fist name</label>
                <input v-model="userData.firstName" type="text" readonly class="form-control" id="userFirstName" placeholder="Enter first name">
            </div>
            <div class="form-group">
                <label for="userLastName">Last name</label>
                <input v-model="userData.lastName" type="text" readonly class="form-control" id="userLastName" placeholder="Enter last name">
            </div>
            <div class="form-group">
                <label for="userUserName">Username</label>
                <input v-model="userData.username" type="text" readonly  class="form-control" id="userUserName">
            </div>
            <div class="form-group">
                <label for="userPassword">Password</label>
                <input  v-model="userData.password" type="password" readonly class="form-control" id="userPassword" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="userEmail">Email address</label>
                <input v-model="userData.email" type="email" readonly class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="userBirthday">Birthday</label>
                <input  v-model="userData.birthday" type="text" readonly class="form-control" id="userBirthday" placeholder="Enter your birthday">
            </div>
            <div class="form-group">
                <label for="userAddress">Address</label>
                <input  v-model="userData.address" type="text" readonly class="form-control" id="userAddress" aria-describedby="addressHelp" placeholder="Enter your address">
                <small id="emailAddress" class="form-text text-muted">We'll never share your address with anyone else.</small>
            </div>
            <input type="text" readonly hidden v-model="userData.id">
            <button type=button @click.prevent="onCancel" >Cancel</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "UserDetails",
    props: ['user', 'cancel'],
    data() {
      console.log(this.user);
      return {
        userData: this.user
      }
    },
    methods: {
      onCancel(){
        console.log('CANCEL SUBMIT');
        this.cancel();
      }
    }
  }
</script>

<style scoped>

</style>
