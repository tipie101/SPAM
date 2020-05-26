<!-- TODO -->
<!-- SoundCloud Player -->
<!-- https://codepen.io/notoriousb1t/pen/BNPLRo -->
<!-- https://fsymbols.com/generators/tarty/ -->

<template>
<div>
  <div id="app">
    <img id="header-font" src="./assets/spam2.png" />
    <router-view/> 
  </div>

  <!-- colors: %2334495e (graublau), %2341b883 (mint) -->
  <iframe class="footer" width="100%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/443532657&color=%2341b883&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false">
  </iframe>

</div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  
  margin-top: 60px;
}
#header-font {
  width: 70%;
  max-width: 500px;
}
.footer {
  position:fixed;
  bottom:0;
}

</style>
