<template>
  <div class="container">
    <navigation activeTab="tech & it"></navigation>
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
      tab: 'tech & it',
    }
  }
}

</script>