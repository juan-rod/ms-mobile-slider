<template>
  <div>
  	<footer>
      <p>
    <router-link to="/">/Main</router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/contact">/contact</router-link>
    <router-link to="/location">/location</router-link>
  </p>

  	</footer>
  </div>
</template>

<script>

  export default {
    data () {
      return {
       
      }
    }
}
</script>


<style scoped>
footer{
	border:2px solid blue;
  position: absolute;
  bottom: 0;
  width: 100%;
}

</style>