import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/sub/About.vue';
import Contact from '../components/sub/Contact.vue';
import Location from '../components/sub/Location.vue';
import Main from '../components/sub/Main.vue';


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: '',
      component: Home,
      children: [
        {path: '', component: Main, props: true},
        {path: 'about', component: About, props: true},
        {path: 'contact', component: Contact, props: true},
        {path: 'location', component: Location, props: true}

      ]
    }
  ]
  // mode:'history'
})
// const router = new VueRouter({
// 	routes,
// 	mode:'history'
// }) 
