<template>
  <div class="container">
    <navigation activeTab="tuts & theory"></navigation>
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
      tab: 'tuts & theory',
    }
  }
}

</script>