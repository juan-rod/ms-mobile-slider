<template>
	<div>
	    <nav class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded match-img">
	        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
	            <span class="navbar-toggler-icon"></span>
	        </button>
	        <div class="container nav-container">
	            <a class="navbar-brand" href="/">
	            	<img class="img-fluid" src="../../assets/ms_logo_2c.png" alt="">
	            </a>
	            <div class="collapse navbar-collapse" id="navbarExample">
	                <ul class="navbar-nav ml-auto">
	                    <li class="nav-item">
	                    	<router-link class="nav-link" to="/about"><span class="">About</span></router-link>
	                    </li>
	                    <li class="nav-item">
	                        <router-link class="nav-link" to="/location"><span class="">Location</span></router-link>
	                    </li>
	                    <li class="nav-item">
	                         <router-link class="nav-link" to="/contact"><span class="">Contact</span></router-link>
	                    </li>
	                    <li class="nav-item">
	                         <router-link class="nav-link" to="/sign-up"><span class="">Sign Up</span></router-link>
	                    </li>
	                </ul>
	            </div>
	        </div>
	    </nav>
	</div>
</template>
<script>

</script>
<style>
nav{
	width: 100vw;
}
.nav-container{
	height:50px;
}
@media screen and (max-width: 460px) {
	.navbar-collapse{
		text-align: right;
	}
   
    .navbar-brand{
        max-width: 80% !important;
    }
    .navbar-toggler{
        z-index: 10;
    }
}
@media screen and (max-width: 575px) {
	.navbar-brand{
        max-width: 80% !important;
    }
    .navbar-toggler{
        z-index: 10;
    }
    .navbar-collapse{
		text-align: right;
	}
}
@media screen and (max-width: 767px) {
	.navbar-collapse{
		text-align: right;
	}
}
@media screen and (max-width: 991px) {
	.navbar-collapse{
		text-align: right;
	}
}
</style>