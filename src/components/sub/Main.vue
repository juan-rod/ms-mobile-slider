<template>
  <div>
    <div class="container-fluid main-container">
    <app-header></app-header>
    <app-page-content></app-page-content>
    <app-page-content-footer></app-page-content-footer>
    </div>
  </div>
</template>

<script>
import Header from '../main/Header.vue';
import PageContent from '../main/PageContent.vue';
import PageContentFooter from '../main/PageContentFooter.vue';
export default {
	components: {
      'app-header': Header,
      'app-page-content': PageContent,
      'app-page-content-footer': PageContentFooter,
    }
 
}
</script>

<style scoped>
	.main-container{
		/*border:1px dotted red;*/
		flex:1;
		height:100vh;
		width: 100vw;
		position: absolute;
		padding: 0;

		/*height:100%;*/
		/*background: #FF8008;
		background: -webkit-linear-gradient(to right, #FFC837, #FF8008); 
		background: linear-gradient(to right, #FFC837, #FF8008);*/ 
	}
</style>
