<template>
	<div>
		<header class="intro-header">
			<div class="transparent-bg">
		        <div class="container ">
		            <div class="intro-message">
		                <h1>It’s smart to get paid for being you. <br>Be smart.</h1>
		                <h4>Join the MediaScience Panel and get paid for your opinions.</h4>
		                <hr class="intro-divider">
		                <router-link class="btn btn-primary btn-lg signUpBtn" to="/sign-up"><span class="network-name">Sign Up</span></router-link>
		                
		            </div>
		        </div>
			</div>
		</header>
	</div>
</template>
<script>

</script>
<style>
.transparent-bg {
	background-color:rgba(0, 0, 0, 0.28);
    height: 100vh;
}
.signUpBtn {
	margin-top: 20px;
    width: 25%;
    display: block;
    position: relative;
    margin: 5% auto 2%;
    padding: 1rem 3rem;
    font-size: 1.5em;
    -webkit-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    -moz-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
    box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.52);
}

.signUpBtn > span{
	font-size:1.1em;
	color: #fff;
}
.signUpBtn:hover {
	color: rgba(41, 43, 44, 0.99);
	
}
.signUpBtn > span:hover{
	color: rgba(41, 43, 44, 0.99);
}
.intro-header {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    color: #f8f8f8;
    background: url(../../assets/nyc-landing.jpg) no-repeat center center;
    background-size: cover;
    max-height: 773px;
}

.intro-message {
    position: relative;
    padding-top: 20%;
    padding-bottom: 20%;
}
.intro-message h4{
    /*color:#2fc2ff;*/
}

.intro-message > h1 {
    margin: 0;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
    font-size: 5em;
    margin-bottom: 20px;
    letter-spacing: 2px;
}

.intro-divider {
    width: 100%;
    border-top: 1px solid #f8f8f8;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.intro-message > h3 {
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
}
@media only screen and (min-width: 1024px) and (max-width: 1199px){
	.intro-message{
	 padding-top: 15%;
	}
	.intro-message h1{
		font-size: 4em;
	}
}

@media only screen and (min-width: 768px) and (max-width: 1023px){
	.intro-message h1{
		font-size: 3em;
	}
}

@media only screen and (min-width: 480px) and (max-width: 767px){
	
	.intro-message {
        padding-bottom: 15%;
    }
    .intro-message > h1 {
        font-size: 2.5em;
    }
    .intro-message > h4 {
        font-size: 1.2em;
    }
    ul.intro-social-buttons > li {
        display: block;
        margin-bottom: 20px;
        padding: 0;
    }
    ul.intro-social-buttons > li:last-child {
        margin-bottom: 0;
    }
    .intro-divider {
        width: 100%;
    }
	.signUpBtn{
        width: 50% !important;
        margin-top: 40px !important;
        font-size: 1em;
        padding: .75rem 1.5rem;
    }
}

@media only screen and (min-width: 320px) and (max-width: 479px){
	.transparent-bg {
        height: auto;
    }
    .intro-message  h1 {
  		margin-top:10%;
        font-size: 2em;
    }
    .intro-message  h4 {
        font-size: 1em;
    }
    .intro-header{
        padding-bottom: 0;
    }
     .signUpBtn{
        width: 50% !important;
        margin-top: 40px !important;
        font-size: 1em;
        padding: .75rem 1.5rem;
    }
}
</style>