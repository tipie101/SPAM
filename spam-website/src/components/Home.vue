<template>
  <div class="container">
    <!-- TODO: use data instead of hardcoding -->
    <navigation activeTab="home"></navigation>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tab: 'home'
    }
  }
}

</script>