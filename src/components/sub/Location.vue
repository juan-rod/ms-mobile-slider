<template>
  <div>
    <div class="container-fluid location-container">
        <div class="row">
          <div class=" col location-detail">
            <div class="row location-box-shadow">
              <div class="col-12 location-title">
                <h1>Location</h1>
                <hr>
                <p>189 Sullivan St New York, NY 10012</p>
              </div>
              <div class="col-12 location-content">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.522534147274!2d-74.00259398459457!3d40.72852627933011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25991f849ce35%3A0x959acfaea0fba99a!2s189+Sullivan+St%2C+New+York%2C+NY+10012!5e0!3m2!1sen!2sus!4v1494445326931" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
	.location-container{
		border:1px dotted red;
		flex:1;
		position: absolute;
		width: 100vw;
		/*height: 100%;*/
		height:90vh;
		/*padding: 7% 20%;*/
		background: #1D976C;  
		background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);  
		background: linear-gradient(to right, #93F9B9, #1D976C); 

	}
	  .row{
    margin-right: 0;
    margin-left: 0;
  }
  .location-box-shadow{
    -webkit-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    -moz-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
  }

  .location-detail{
    margin: 7% 20%;
  }
  .location-title{
    background: #00408a;
    color: #fff;
    padding: 5% 8% 1%;
  }
  .location-title h1 {
    text-align: center;
    margin-bottom: 5%;
  }
  .location-title p {
    padding: 0 10%;
    font-size: 1.1em;
    font-weight: 400;
    text-align: center;
  }
  .location-content{
    background: rgba(0, 64, 138, 0.76);
    color: #fff;
    padding: 5% 0;
    webkit-box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52); 
    -moz-box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52);
    box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52);
  }
  iframe{
    height: 100%;
    width: 100%;
    position: relative;
    padding: 0 5%;

  }

@media only screen and (min-width: 1024px) and (max-width: 1199px){

}

@media only screen and (min-width: 768px) and (max-width: 1023px){

}

@media only screen and (min-width: 480px) and (max-width: 767px){

}

@media only screen and (min-width: 320px) and (max-width: 479px){
  .location-container{
    height:100%;
  }
  .location-detail{
    margin-right: 0;
    margin-left: 0;
  }
  .location-title h1 {
    text-align: left;
  }

  iframe{
    height: 100vh;
    width: 100%;
    position: relative;
    margin: 0 auto;
  }
  .location-detail p {
    font-size: 1em;
    text-align: left;
    padding: 0;
  }
}
</style>
