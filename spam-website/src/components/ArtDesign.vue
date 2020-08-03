<!-- https://ko.javascript.info/css-animations -->

<template>
  <div class="container">
    <navigation activeTab="art & design"></navigation>
    <button id="color" class="animated" @click="turnRed">Click me</button>
    <div id="animation">
      <!-- animation with THREE.js -->
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'art & design',
  components: {
    Navigation
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeTab: 'art & design',
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    turnRed: function() {
      color.style.backgroundColor = "red";
    },
    init: function() {
      console.log("init");
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 1;

        this.scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshNormalMaterial();

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
    }, 
    animate: function() { 
      console.log("animate");
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  }
}


</script>

<style scoped>
.animated {
  transition-property: background-color;
  transition-duration: 3s;
  margin: 300px auto;
}
</style>