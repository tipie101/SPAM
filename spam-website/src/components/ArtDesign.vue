<!-- https://ko.javascript.info/css-animations -->

<template>
  <div class="container">
    <navigation activeTab="art & design"></navigation>
    <!-- <button id="color" class="animated" @click="turnRed">Click me</button>
    <div id="animation">
      TODO: animation with THREE.js
    </div> -->
    <div class="foto-grid">
      <!-- create grid with posters -->
      <div class="row">
        <div class="col-md-6">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-back">
                <img src="src/assets/spam_party_posters/space_spam.jpg" class="img-fluid" alt="Responsive image">
              </div>
              <div class="flip-box-front">
                <div class="flip-box-text">
                  <br>
                  <h2>SPAM PARTY EVENTS</h2>
                  <p>What an amazing stuff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="src/assets/spam_party_posters/scify_poster.jpg" class="img-fluid" alt="Responsive image">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img src="src/assets/spam_party_posters/baby_spam.jpg" class="img-fluid" alt="Responsive image">
          <img src="src/assets/spam_party_posters/jungle_spam_original.jpg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="col-md-4">
          <img src="src/assets/spam_party_posters/2nd_aniversary_vertical.jpg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="col-md-4">
          <img src="src/assets/spam_party_posters/fiktiva.jpg" class="img-fluid" alt="Responsive image">
         
          <!-- TODO: Make images same size -->
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-back">
                <img src="src/assets/spam_party_posters/el_dorado_faces.jpg" class="img-fluid" alt="Responsive image">
              </div>
              <div class="flip-box-front">
                <img src="src/assets/spam_party_posters/banner_dorado.jpg" class="img-fluid" alt="Responsive image">
              </div>
            </div>
          </div>
          
        </div>
      </div>   
      <div class="row">
        <div class="col-md-4">
          <img src="src/assets/spam_party_posters/spam_no7_poster.jpg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="col-md-4">
          <img src="src/assets/spam_party_posters/spams_funeral.jpg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="col-md-4">
          <img src="src/assets/spam_party_posters/tax_scam_spam.jpg" class="img-fluid" alt="Responsive image">
        </div>
      </div>
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

.foto-grid {
  margin: 300px 0px 500px 0px;
}

.foto-grid img {
  margin: 10px;
  padding: 0px;
}

/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-box {
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  /* width: 200px; */
  /* height: 200px; */
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center; 
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box:hover .flip-box-text {
  opacity: 0.01;
  transition-property: opacity;
  transition-duration: 1s;
}

/* Position the front and back side */
.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-box-front {
  background-color: white;
  color: #34495E;
}

/* Style the back side */
.flip-box-back {
  transform: rotateY(180deg);
}

</style>