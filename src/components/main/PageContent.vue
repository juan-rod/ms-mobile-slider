<template>
	<div>
	    <section class="content-section-a" slot="pageContent">
	    	<div class="container">
	    		<div class="row">
		    		<div class="col-sm-12 col-lg-4 page-content">
			            <div class="row page-content-box-shadow">
			                <div class="col-lg-12 page-content-title">
			                    <div class="circle">
			                   		<i class="fa fa-lg fa-video-camera"></i>
			                    </div>
			                    <hr class="section-heading-spacer">
			                    <div class="clearfix"></div>
			                    <h2 class="section-heading">360 Tour</h2>
			                </div>
			                <div class="col-lg-12 page-content-detail">
			                    <p class="lead">Take the tour!</p>
		                		<router-link class="btn btn-primary btn-lg page-content-button" to="/" ><span class="network-name">Learn More</span></router-link>
			                </div>
			            </div> <!-- /.row -->
		    		</div> <!-- /.col-->
		    		<div class="col-sm-12 col-lg-4 page-content">
			            <div class="row page-content-box-shadow">
			                <div class="col-lg-12 page-content-title">
			                    <div class="circle">
			                   		<i class="fa fa-lg fa-users"></i>
			                    </div>
			                    <hr class="section-heading-spacer">
			                    <div class="clearfix"></div>
			                    <h2 class="section-heading">Panel Members</h2>
			                </div>
			                <div class="col-lg-12 page-content-detail">
			                    <p class="lead">Already a member?</p>
			                    <router-link class="btn btn-primary btn-lg page-content-button" to="/"><span class="network-name">Login</span></router-link>
			                </div>
			            </div> <!-- /.row -->
		    		</div> <!-- /.col-->
		    		<div class="col-sm-12 col-lg-4 page-content">
			            <div class="row page-content-box-shadow">
			                <div class="col-lg-12 page-content-title">
			                    <div class="circle">
			                   		<i class="fa fa-lg fa-comments"></i>
			                    </div>
			                    <hr class="section-heading-spacer">
			                    <div class="clearfix"></div>
			                    <h2 class="section-heading">FAQs</h2>
			                </div>
			                <div class="col-lg-12 page-content-detail">
			                    <p class="lead">Have questions?</p>
			                    <router-link class="btn btn-primary btn-lg page-content-button" to="/faq"><span class="network-name">Learn More</span></router-link>
			                </div>
			            </div> <!-- /.row -->
		    		</div> <!-- /.col-->
	    		</div>
	    	</div>
	    </section>

	</div>
</template>
<script>


</script>
<style>
.content-section-a {
    padding: 50px 0;
    background-color: #f8f8f8;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
}

.content-section-b {
    padding: 50px 0;
    border-top: 1px solid #e7e7e7;
}

.section-heading {
    margin-bottom: 30px;
}

.section-heading-spacer {
    width: 200px;
    border-top: 3px solid #e7e7e7;
}

.page-content{
	margin-bottom: 5%;

 
}
.page-content-box-shadow{
	-webkit-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    -moz-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
}
.page-content-title {
	background: #00408a;
    color: #fff;
    padding: 5% 8% 8%;
}
.page-content-detail{
	background: rgba(0, 64, 138, 0.76);
    color: #fff;
    padding: 5% 15%;
   webkit-box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52); 
    -moz-box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52);
    box-shadow: inset 0px 8px 7px -8px rgba(0,0,0,0.52);
}
.page-content-detail  p{
	/*height:75px;*/
}
.circle{
	border: 2px solid #2fc2ff;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    position: relative;
    margin: 0 auto;
}
.circle .fa-lg{
	font-size: 3em;
	position: relative;
    margin: 25% 0;
}
.page-content-button{
	display: block;
    position: relative;
    margin: 5% auto 2%;
    padding: 1rem;
    font-size: 1.5em;
    -webkit-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    -moz-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
}
.page-content-button .network-name {
	font-size:1.1em;
	color: #fff;
}
.border{
	border: 1px solid red;
}
.transparent-bg-a{
	background-color:rgba(0, 0, 0, 0.28);
}
.banner {
    padding: 100px 0;
    color: #f8f8f8;
    background: url(../../assets/sociall-banner-bg.jpg) no-repeat center center;
    background-size: cover;
}

.banner h2 {
    margin: 0;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
    font-size: 3em;
}

.banner ul {
    margin-bottom: 0;
}

.banner-social-buttons {
    float: right;
    margin-top: 0;
}
@media screen and (max-width: 460px) {
   .banner{
   	text-align: center;
   }
   .page-content-title{
   		/*display: none;*/
   }
   .pc_connect > h2{
   	font-size: 2em !important;
   }
   .pc_connect-btns{
   	    margin: 2% 15%;
   }
   .banner-social-buttons{
   	width:100%;
   }

}



@media screen and (max-width: 575px) {
	.banner{
	 text-align: center;
	}
	ul.banner-social-buttons{
		float:none;
	}
	.small{
	 text-align: center;
	}
}
@media screen and (max-width:767px) {
    .banner h2 {
        margin: 0;
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
        font-size: 3em;
    }
    ul.banner-social-buttons{
		float:none !important;
	}
    ul.banner-social-buttons > li {
        display: block;
        margin-bottom: 20px;
        padding: 0;
    }
    ul.banner-social-buttons > li:last-child {
        margin-bottom: 0;
    }
}
@media screen and (max-width: 991px) {
	.banner{
	 	padding: .75rem 1.1rem;
	 	text-align: center;
	 	float: none;
	}
	.list-inline-item {
		/*padding-bottom: 2% ;*/
	}
	 ul.banner-social-buttons{
		float: none;
	}
}

@media(min-width:1199px) {
    ul.banner-social-buttons {
        float: left;
        margin-top: 15px;
    }
}

</style>