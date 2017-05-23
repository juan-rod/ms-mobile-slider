<template>
  <div class="pt-page">
    <app-nav-bar></app-nav-bar>
      <!-- <transition name="router-slide" mode="out-in"> -->
      <!-- <v-touch @swipeleft="doSomething"> -->
      <transition name="router-slide">
        <router-view></router-view>
      </transition>
    <!-- </v-touch> -->
    <app-footer-nav></app-footer-nav>
  </div>
</template>

<script>
import NavBar from './main/NavBar.vue';
import FooterNav from './main/FooterNav.vue';
import VueRouter from 'vue-router';
var router = new VueRouter() ;

  export default {
    components: {
      'app-nav-bar': NavBar,
      'app-footer-nav': FooterNav
    },
    data () {
      return {
       
      }
    },
    methods:{
      doSomething: function(){
        console.log("swipeleft");
        
        router.push('about');
        
      }
    }
}
</script>


<style scoped>

.pt-page{
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
}

.router-slide-enter-active {
  -webkit-animation: moveFromRight .6s ease both;
  animation: moveFromRight .6s ease both;
  opacity: 1;
  
}
.router-slide-leave-active {
  -webkit-animation: moveToLeft .6s ease both;
  animation: moveToLeft .6s ease both;
  opacity: 1;
}
.router-slide-enter{
}
.router-slide-leave-to{
}
@keyframes moveToLeft {
  from { }
  to { 
      -webkit-transform: translateX(-100%); 
      transform: translateX(-100%);
     }
}
@keyframes moveFromLeft {
  from { -webkit-transform: translateX(-100%); transform: translateX(-100%); }
}
@keyframes moveFromRight {
  from { -webkit-transform: translateX(100%); transform: translateX(100%); }
}



</style>