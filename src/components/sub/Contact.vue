<template>
    <div class="container-fluid contact-container">
          <div class="row">
            <div class="col contact-detail">
              <div class="row contact-box-shadow">
                <div class="col-12 contact-title">
                  <h1>Contact</h1>
                  <hr>
                  <div class="contact-info">
                  <p>
                    <i class="fa fa-lg fa-clock-o"></i>
                    For your convenience, our facilities are open from 9:00am until 9:00pm seven days a week.
                  </p>
                  
                  <p>
                    <i class="fa fa-lg fa-phone"></i>
                     (646) 998-3601 
                  </p>     
                  <p>
                    <i class="fa fa-lg fa-envelope"></i>
                    NewYork@mediasciencepanel.com
                  </p>     
                 
                  <p>
                    <i class="fa fa-lg fa-map-marker"></i>
                    189 Sullivan St New York, NY 10012
                  </p>     

                  </div>

                </div>
                  <div class="col-12 contact-btnDiv">
                    <div class="row">
                      <div class="col-12">
                        <p>Follow us online for up to date information about current and future panel studies!</p>
                      </div>
                      <div class="col-12 contact-btn-col">
                        <a href="#" class="btn-fb"> <i class="fa fa-lg fa-facebook"></i></a>
                        <a href="#"class="btn-twitter"> <i class="fa fa-lg2 fa-twitter"></i></a>

                      </div>
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
	.contact-container{
		border:1px dotted red;
		flex:1;
		position: absolute;
		width: 100vw;
		/*height: 100%;*/
		height:90vh;
		/*padding: 7% 20%;*/
		background: #EB3349;
		background: -webkit-linear-gradient(to right, #F45C43, #EB3349);  
		background: linear-gradient(to right, #F45C43, #EB3349); 

	}
	  .row{
    margin-right: 0;
    margin-left: 0;
  }
  .contact-box-shadow{
    -webkit-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    -moz-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
  }
  .contact-detail{
    margin: 7% 20%;
  }
  .contact-detail h1 {
    text-align: center;
    margin-bottom: 5%;
  }
  hr{
    border-top: 1px solid rgba(241, 238, 238, 0.5);
  }
  .contact-detail p {
    /*padding: 0 10%;*/
    font-size: 1.1em;
    font-weight: 400;
    text-align: justify;
  }
  .contact-detail p i{
    padding-right: 15px;
  }
  .contact-title{
    background: #00408a;
    color: #fff;
    padding: 5% 8% 8%;
  }
  .contact-btnDiv{
    background: rgba(0, 64, 138, 0.76);
    color: #fff;
    padding: 5% 15%;
    webkit-box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52); 
    -moz-box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52);
    box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52);

  }
  .contact-btnDiv p {
    margin-bottom: 0;
  }
  .contact-btnDiv a {
    text-decoration: none;
    color: #fff;
    padding-left: 2%;
    padding-right: 2%;
  }
  .contact-btnDiv a i {
    font-size: 2em;
    text-align: left;
  }
  .contact-btnDiv .contact-btn-col{
    text-align: right;
  }


.border{
  border:1px solid red;
}




@media only screen and (min-width: 1024px) and (max-width: 1199px){

}

@media only screen and (min-width: 768px) and (max-width: 1023px){
  .contact-container{
    height:100%;
  }
}

@media only screen and (min-width: 480px) and (max-width: 767px){
  .contact-container{
    height:100%;
  }
  .contact-detail{
    margin: 7% 10%;
  }
}

@media only screen and (min-width: 320px) and (max-width: 479px){
  .contact-container{
    height:100%;
  }
  .contact-detail{
    margin: 0 0 10%;
  }
  .contact-title p{
    font-size: 1em;
  }
  .contact-title h1 {
    text-align: left;
  }
  .contact-btnDiv{
    padding: 5% 10%;
  }
  .contact-btnDiv p {
    font-size: 1em;
  }
}

</style>
