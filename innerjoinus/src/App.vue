<script setup>
import MainPage from './components/MainPage/MainPageAfterLogin/mainbackdata.vue'

</script>

<template>
  <router-link to="/main"></router-link>
  <router-view></router-view> 
</template>

<script>
  export default {
    name: 'App',
    components: {
      MainPage
    }
  }
</script>

<style scoped>

</style>
