<template>
    <div>Knockout Frame</div>
</template>

<script>
  import ko from 'knockout';

  export default {
    name: "KnockoutFrame",
    props: ["component"],
    mounted() {
      this.$el.innerHTML = this.component.template;
      ko.applyBindings(this.component, this.$el);
    }
  }
</script>

<style scoped>

</style>
