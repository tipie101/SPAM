<template>
  <div class="container">
    <navigation activeTab="info"></navigation>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'info',
  components: {
    Navigation
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeTab: 'info',
    }
  }
}

</script>