<template>
  <div>
      <footer class="">
          <div class="container">
            <div class="row">
              <div class="col-6 no-padding">
                  <ul class="list-inline">
                      <li class="list-inline-item">
                          <router-link class="" to="/"><span class="">Home</span></router-link>
                      </li>
                      <li class="footer-menu-divider list-inline-item">&sdot;</li>
                      <li class="list-inline-item">
                          <router-link class="" to="/about"><span class="">About</span></router-link>
                      </li>
                      <li class="footer-menu-divider list-inline-item">&sdot;</li>
                      <li class="list-inline-item">
                          <router-link class="" to="/location"><span class="">Location</span></router-link>
                      </li>
                      <li class="footer-menu-divider list-inline-item">&sdot;</li>
                      <li class="list-inline-item">
                          <router-link class="" to="/contact"><span class="">Contact</span></router-link>
                      </li>
                  </ul>
              </div>
              <div class="col-6 no-padding">
                  <ul class="list-inline alignRight">
                      <li class="list-inline-item">
                          <router-link class="" to="/sign-up"><span class="">Sign Up</span></router-link>
                      </li>
                      <li class="footer-menu-divider list-inline-item">&sdot;</li>
                      <li class="list-inline-item">
                          <router-link class="" to="/faq"><span class="">FAQ</span></router-link>
                      </li>
                      <li class="footer-menu-divider list-inline-item">&sdot;</li>
                      <li class="list-inline-item">
                          <router-link class="" to="/rewards"><span class="">Rewards</span></router-link>
                      </li>
                  </ul>
                  </div>
            </div>
              <p class="copyright text-muted small">Copyright &copy; Media Science Labs 2017. All Rights Reserved</p>
          </div>
      </footer>
  </div>
</template>
<script>

</script>
<style >
.alignRight{
  text-align: right;
}

footer {
    padding: 20px 0;
    background-color: #f8f8f8;
    /*position: relative;*/
    /*border:2px solid blue;*/
    position: absolute;
    bottom: 0;
    width: 100%;
    /*z-index: 10;*/
}

p.copyright {
    margin: 15px 0 0;
}
.no-padding{
  padding:0;
}

  
@media screen and (max-width: 460px) {
  footer{
    padding: 20px 0;
    border:2px solid blue;
    position: absolute;
    bottom: 0;
    width: 100%;
    /*display: none;*/
  }
  .col-6 {
    font-size: .75em;
  }
  .list-inline-item {
    display:block;
    margin-bottom: 5px;
  }
  .footer-menu-divider{
    display: none;
  }
  .small{
    font-size: 75%;
    text-align: center;
  }
}
@media screen and (max-width: 767px) {
  footer{
    /*display:none;*/
  }
  .sub-header{
        height: 100%;
  }
}

@media screen and (max-width: 1200px) {
  .small{
   text-align: center;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1199px){

}

@media only screen and (min-width: 768px) and (max-width: 1023px){

}

@media only screen and (min-width: 480px) and (max-width: 767px){

}

@media only screen and (min-width: 320px) and (max-width: 479px){

}




</style>