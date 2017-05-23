<template>
  <div>
    <div class="container-fluid main-container">
    	<h1>main</h1>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
	.main-container{
		border:1px dotted red;
		flex:1;
		height:90vh;
		width: 100vw;
		position: absolute;

		/*height:100%;*/
		padding: 7% 20%;
		background: #FF8008;
		background: -webkit-linear-gradient(to right, #FFC837, #FF8008); 
		background: linear-gradient(to right, #FFC837, #FF8008); 
	}
</style>
