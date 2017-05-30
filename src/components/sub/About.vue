<template>
  <div>
    <div class="container-fluid about-container">
        <div class="row">
          <div class="about-detail">
            <div class="row about-box-shadow">
              <div class="col-12 about-title">
                <h1>About</h1>
                <hr>
                <p>
                MediaScience Panel is a private media research lab in Austin, Chicago, and New York City. Our studies cover audience ad consumer trends in multiple platforms including mobile apps, video games, online publications, wearable technology like virtual reality headsets, trending TV shows, and television broadcast in real-time from sports to politics.
                <br>
                <br>
                Our panel is compromised of local residents who participate in studies and have the opportunity to voice their opinion, along with being compensated for their participation time.
                </p>
              </div>
              <div class="col-12 about-content">
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
	.about-container{
		border:1px dotted red;
		flex:1;
		position: absolute;
		width: 100vw;
		/*height: 100%;*/
		height:90vh;
		/*padding: 7% 20%;*/
		background: #DD5E89;
		background: -webkit-linear-gradient(to right, #F7BB97, #DD5E89);
		background: linear-gradient(to right, #F7BB97, #DD5E89);

	}
	.row{
    margin-right: 0;
    margin-left: 0;
  }
  .about-box-shadow{
    -webkit-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    -moz-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
  }
  .about-detail{
    margin: 7% 20%;
    
  }
  .about-title{
    background: #00408a;
    color: #fff;
    padding: 5% 8% 8%;
  }
  .about-title h1 {
    text-align: center;
  }
   hr{
    border-top: 1px solid rgba(241, 238, 238, 0.5);
  }
  .about-content{
    background: rgba(0, 64, 138, 0.76);
    color: #fff;
    padding: 5% 15%;
    webkit-box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52); 
    -moz-box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52);
    box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52);
  }
  .about-title p {
    /*padding: 0 10%;*/
    font-size: 1.1em;
    font-weight: 400;
    text-align: justify;
  }

@media only screen and (min-width: 1024px) and (max-width: 1199px){

}

@media only screen and (min-width: 768px) and (max-width: 1023px){

}

@media only screen and (min-width: 480px) and (max-width: 767px){

}

@media only screen and (min-width: 320px) and (max-width: 479px){
  .about-container{
    height: 100%;
  }
  .about-title h1 {
    text-align: left;
  }
  .about-detail{
    /*margin-top: 70px;*/
    margin: 0 0 10%;
    padding: 0 15px;
  }
 .about-detail > p {
    padding: 0 15px 0;
    font-size: 1.1em;
    font-weight: 400;
    text-align: justify;
  }
}
</style>
