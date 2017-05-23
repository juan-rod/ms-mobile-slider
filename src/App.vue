<template>
  <div id="app" class="pt-perspective">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,
html {
    width: 100%;
    height: auto;
    
}
#app{
  height: 100vh;
  display:flex;
  flex-direction:column;
}
.pt-perspective{
	position: absolute;
	width: 100%;
	height: 100%;
	perspective: 1200px;
	transform-style: preserve-3d;
}

</style>
